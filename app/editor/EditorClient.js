'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { homeSchema, getByPath, setByPath } from './schema'

const PREVIEW_URL = '/?draft=1'

export default function EditorClient({ initial }) {
  const [content, setContent] = useState(initial)
  const [openSection, setOpenSection] = useState(homeSchema[0].label)
  const [highlightPath, setHighlightPath] = useState(null)
  const [status, setStatus] = useState({ kind: 'idle', message: '' })
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false)
  const iframeRef = useRef(null)
  const fieldRefs = useRef({})

  // Focus a field by path (used when clicking elements in iframe)
  const focusField = useCallback((path) => {
    if (!path) return
    const owningSection = homeSchema.find((s) =>
      s.fields.some((f) => path === f.path || path.startsWith(f.path + '.'))
    )
    if (owningSection) setOpenSection(owningSection.label)
    setHighlightPath(path)
    setMobilePanelOpen(true)
    setTimeout(() => {
      const el = fieldRefs.current[path]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        const input = el.querySelector('input, textarea')
        if (input) input.focus()
      }
    }, 100)
  }, [])

  // Listen for clicks from iframe
  useEffect(() => {
    function onMessage(e) {
      if (!e.data || e.data.type !== 'editor:click') return
      focusField(e.data.path)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [focusField])

  // Inject click-to-edit script into iframe after each load
  const onIframeLoad = useCallback(() => {
    const win = iframeRef.current?.contentWindow
    if (!win) return
    try {
      win.postMessage({ type: 'editor:init' }, '*')
    } catch {}
    try {
      const doc = win.document
      const style = doc.createElement('style')
      style.id = 'editor-overlay-style'
      style.textContent = `
        [data-edit] { outline: 1px dashed transparent; outline-offset: 2px; cursor: pointer; transition: outline-color 120ms; position: relative; }
        [data-edit]:hover { outline-color: #a855f7; background: rgba(168,85,247,0.06); }
        [data-edit].editor-active { outline: 2px solid #a855f7 !important; background: rgba(168,85,247,0.12); }
      `
      if (!doc.getElementById('editor-overlay-style')) doc.head.appendChild(style)

      doc.addEventListener('click', (e) => {
        const target = e.target.closest('[data-edit]')
        if (!target) return
        e.preventDefault()
        e.stopPropagation()
        doc.querySelectorAll('[data-edit].editor-active').forEach((n) => n.classList.remove('editor-active'))
        target.classList.add('editor-active')
        const path = target.getAttribute('data-edit')
        window.parent.postMessage({ type: 'editor:click', path }, '*')
      }, true)
    } catch {}
  }, [])

  function update(path, value) {
    setContent((c) => setByPath(c, path, value))
  }

  async function save(action) {
    setStatus({ kind: 'busy', message: action === 'publish' ? 'Publishing…' : 'Saving…' })
    try {
      const url = action === 'publish' ? '/api/editor/publish' : '/api/editor/save'
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({
        kind: 'ok',
        message: action === 'publish' ? 'Published live!' : 'Draft saved.',
      })
      // Reload preview to reflect changes
      const frame = iframeRef.current
      if (frame) frame.src = PREVIEW_URL + '&t=' + Date.now()
      setTimeout(() => setStatus({ kind: 'idle', message: '' }), 2400)
    } catch (e) {
      setStatus({ kind: 'err', message: 'Failed: ' + (e.message || 'unknown') })
    }
  }

  async function logout() {
    await fetch('/api/editor/auth', { method: 'DELETE' })
    window.location.reload()
  }

  return (
    <div className="ed-root">
      <header className="ed-header">
        <div className="ed-brand">
          <strong>Editor</strong>
          <span className="ed-sub">cindybaez.com</span>
        </div>
        <div className="ed-actions">
          {status.message && (
            <span className={`ed-status ed-status-${status.kind}`}>{status.message}</span>
          )}
          <button className="ed-btn ed-btn-mobile" onClick={() => setMobilePanelOpen((v) => !v)}>
            {mobilePanelOpen ? 'Preview' : 'Edit'}
          </button>
          <button className="ed-btn ed-btn-ghost" onClick={() => save('draft')}>Save Draft</button>
          <button className="ed-btn ed-btn-primary" onClick={() => save('publish')}>Publish</button>
          <button className="ed-btn ed-btn-link" onClick={logout}>Logout</button>
        </div>
      </header>

      <div className="ed-body">
        <div className={`ed-preview ${mobilePanelOpen ? 'is-hidden-mobile' : ''}`}>
          <iframe
            ref={iframeRef}
            src={PREVIEW_URL}
            onLoad={onIframeLoad}
            title="Site preview"
          />
        </div>

        <aside className={`ed-panel ${mobilePanelOpen ? 'is-open' : ''}`}>
          <div className="ed-panel-inner">
            <p className="ed-panel-hint">
              Click any text or image in the preview to jump to that field. Press <strong>Save Draft</strong> to keep working, or <strong>Publish</strong> to push live.
            </p>
            {homeSchema.map((section) => (
              <Section
                key={section.label}
                section={section}
                content={content}
                update={update}
                isOpen={openSection === section.label}
                onToggle={() => setOpenSection(openSection === section.label ? null : section.label)}
                highlightPath={highlightPath}
                fieldRefs={fieldRefs}
              />
            ))}
          </div>
        </aside>
      </div>

    </div>
  )
}

function Section({ section, content, update, isOpen, onToggle, highlightPath, fieldRefs }) {
  return (
    <div className={`ed-section ${isOpen ? 'open' : ''}`}>
      <button className="ed-section-head" onClick={onToggle}>
        <span>{section.label}</span>
        <span className="ed-chev">▶</span>
      </button>
      {isOpen && (
        <div className="ed-section-body">
          {section.fields.map((field) => (
            <Field
              key={field.path}
              field={field}
              content={content}
              update={update}
              highlightPath={highlightPath}
              fieldRefs={fieldRefs}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Field({ field, content, update, highlightPath, fieldRefs }) {
  const value = getByPath(content, field.path)
  const isHighlighted = highlightPath === field.path || highlightPath?.startsWith(field.path + '.')
  const setRef = (el) => { if (el) fieldRefs.current[field.path] = el }

  if (field.type === 'cardList') {
    return (
      <div className="ed-field" ref={setRef}>
        <label className="ed-label">{field.label}</label>
        {value.map((item, i) => (
          <div className="ed-card" key={i}>
            <p className="ed-card-title">#{i + 1}</p>
            {field.itemFields.map((sub) => (
              <Field
                key={sub.key}
                field={{ ...sub, path: `${field.path}.${i}.${sub.key}`, label: sub.label }}
                content={content}
                update={update}
                highlightPath={highlightPath}
                fieldRefs={fieldRefs}
              />
            ))}
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <button
                type="button"
                className="ed-icon-btn"
                title="Move up"
                disabled={i === 0}
                onClick={() => {
                  if (i === 0) return
                  const next = [...value]
                  ;[next[i - 1], next[i]] = [next[i], next[i - 1]]
                  update(field.path, next)
                }}
              >↑</button>
              <button
                type="button"
                className="ed-icon-btn"
                title="Move down"
                disabled={i === value.length - 1}
                onClick={() => {
                  if (i === value.length - 1) return
                  const next = [...value]
                  ;[next[i + 1], next[i]] = [next[i], next[i + 1]]
                  update(field.path, next)
                }}
              >↓</button>
              <button
                type="button"
                className="ed-icon-btn"
                title="Remove"
                onClick={() => {
                  if (!confirm('Remove this item?')) return
                  update(field.path, value.filter((_, j) => j !== i))
                }}
              >✕</button>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="ed-add-btn"
          onClick={() => {
            const blank = field.itemFields.reduce((acc, f) => ({ ...acc, [f.key]: '' }), {})
            update(field.path, [...value, blank])
          }}
        >+ Add item</button>
      </div>
    )
  }

  if (field.type === 'list') {
    return (
      <div className="ed-field" ref={setRef}>
        <label className="ed-label">{field.label}</label>
        {value.map((v, i) => (
          <div className="ed-list-row" key={i}>
            <input
              className="ed-input"
              value={v}
              onChange={(e) => update(field.path, value.map((x, j) => (j === i ? e.target.value : x)))}
            />
            <button
              type="button"
              className="ed-icon-btn"
              title="Remove"
              onClick={() => update(field.path, value.filter((_, j) => j !== i))}
            >✕</button>
          </div>
        ))}
        <button
          type="button"
          className="ed-add-btn"
          onClick={() => update(field.path, [...value, ''])}
        >+ Add item</button>
      </div>
    )
  }

  return (
    <div className={`ed-field ${isHighlighted ? 'highlight' : ''}`} ref={setRef}>
      <label className="ed-label">{field.label}</label>
      {field.type === 'textarea' ? (
        <textarea
          className="ed-textarea"
          value={value || ''}
          onChange={(e) => update(field.path, e.target.value)}
        />
      ) : field.type === 'image' ? (
        <ImageField value={value} onChange={(v) => update(field.path, v)} />
      ) : (
        <input
          className="ed-input"
          type={field.type === 'url' ? 'url' : 'text'}
          value={value || ''}
          onChange={(e) => update(field.path, e.target.value)}
        />
      )}
    </div>
  )
}

function ImageField({ value, onChange }) {
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  async function onFile(file) {
    if (!file) return
    setBusy(true); setErr('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/editor/upload', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Upload failed')
      const { url } = await res.json()
      onChange(url)
    } catch (e) {
      setErr(e.message || 'Upload failed')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="ed-image-field">
      <div
        className="ed-image-preview"
        style={value ? { backgroundImage: `url(${value})` } : { background: '#0c0a14' }}
      />
      <div className="ed-image-row">
        <button
          type="button"
          className="ed-btn"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
        >
          {busy ? 'Uploading…' : 'Upload'}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={(e) => onFile(e.target.files?.[0])}
        />
      </div>
      <input
        className="ed-input"
        placeholder="Or paste an image URL"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
      {err && <p style={{ color: '#fca5a5', fontSize: 12, margin: 0 }}>{err}</p>}
    </div>
  )
}
