import { isAuthed } from '@/lib/editor-auth'
import { getDraftContent } from '@/lib/content'
import EditorClient from './EditorClient'
import LoginForm from './LoginForm'

export const metadata = {
  title: 'Editor — Cindy Baez',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function EditorPage() {
  if (!process.env.EDITOR_PASSWORD) {
    return (
      <div style={{ padding: 60, fontFamily: 'system-ui', maxWidth: 600, margin: '60px auto' }}>
        <h1>Editor Not Configured</h1>
        <p>Set the <code>EDITOR_PASSWORD</code> environment variable in Vercel to enable the editor.</p>
        <p>Run: <code>vercel env add EDITOR_PASSWORD</code> and paste a strong password.</p>
      </div>
    )
  }
  if (!(await isAuthed())) {
    return <LoginForm />
  }
  const initial = await getDraftContent()
  return <EditorClient initial={initial} />
}
