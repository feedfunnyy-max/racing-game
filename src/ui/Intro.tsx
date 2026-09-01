import { Suspense, useEffect, useState } from 'react'
import { Footer } from '@pmndrs/branding'
import { useProgress } from '@react-three/drei'

import type { ReactNode } from 'react'

import { useStore } from '../store'
import { setupSession, unAuthenticateUser } from '../data'
import { Keys } from './Keys'
import { Auth } from './Auth'

export function Intro({ children }: { children: ReactNode }): JSX.Element {
  const [clicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const { progress } = useProgress()
  const [session, set] = useStore((state) => [state.session, state.set])

  useEffect(() => {
    if (clicked && !loading) set({ ready: true })
  }, [clicked, loading])

  useEffect(() => {
    if (progress === 100) setLoading(false)
  }, [progress])

  useEffect(() => {
    setupSession(set)
  }, [])

return (
      <div className={`fullscreen bg ${loading ? 'loading' : 'loaded'} ${clicked && 'clicked'}`}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
          
          <h1 style={{ fontSize: '3.5rem', color: '#00ffcc', textShadow: '0 0 20px #00ffcc', margin: '0 0 20px 0', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', fontStyle: 'italic' }}>
            Neon Racing Game
          </h1>

          <a href="#" onClick={() => setClicked(true)} style={{ fontSize: '1.5rem', color: '#ffffff', background: '#ff0055', padding: '15px 40px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 0 15px #ff0055' }}>
            {loading ? `Loading ${progress.toFixed(0)} %` : 'Click to start'}
          </a>

        </div>
      </div>
    )