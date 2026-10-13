'use client'
import { useEffect, useState } from 'react'

export default function GWCountdown({ startIso }) {
  const [label, setLabel] = useState(null)
  useEffect(() => {
    const ms = new Date(startIso).getTime() - Date.now()
    const days = Math.ceil(ms / 86400000)
    setLabel(ms < -3 * 3600000 ? 'Thank you for coming' : days <= 0 ? 'Today is the day' : days === 1 ? 'Tomorrow' : `${days} days to go`)
  }, [startIso])
  if (!label) return null
  return <span className="gw-countdown">{label}</span>
}
