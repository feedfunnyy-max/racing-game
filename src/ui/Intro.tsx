import { useState, useEffect } from 'react'
import { useProgress } from '@react-three/drei'
import type { ReactNode } from 'react'

export function Intro({ children }: { children: ReactNode }): JSX.Element {
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const progress = useProgress((state) => state.progress)

  useEffect(() => {
    if (progress === 100) setLoading(false)
  }, [progress])

 return (
    <div className={`fullscreen bg ${loading ? 'loading' : 'loaded'} ${clicked && 'clicked'}`}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
        <h1 style={{ fontSize: '3rem', color: '#00ffcc', textShadow: '0 0 15px #00ffcc', marginBottom: '20px', fontFamily: 'sans-serif', textTransform: 'uppercase', fontStyle: 'italic' }}>
          NEON RACING GAME
        </h1>
        <a href="#" onClick={() => setClicked(true)} style={{ fontSize: '1.4rem', color: '#ffffff', background: '#ff0055', padding: '12px 35px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {loading ? `Loading ${progress.toFixed(0)} %` : 'Start Game'}
        </a>
      </div>
    </div>
  )