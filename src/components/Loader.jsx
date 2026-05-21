import { useState, useEffect } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1800)
    const t2 = setTimeout(() => setRemoved(true), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (removed) return null

  return (
    <div className={`loader-overlay${hidden ? ' hidden' : ''}`}>
      <div className="loader-spinner" />
    </div>
  )
}
