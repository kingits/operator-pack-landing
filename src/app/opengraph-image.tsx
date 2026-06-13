import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Paperclip Operator Pack'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #111827, #000000)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            backgroundColor: '#2563eb',
            padding: '20px 40px',
            borderRadius: '16px',
          }}
        >
          <span style={{ fontSize: 60, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>
            Fullstack Forge
          </span>
        </div>
        
        <h1
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: 1.1,
            letterSpacing: '-0.05em',
          }}
        >
          Operator Pack v1
        </h1>
        
        <p
          style={{
            fontSize: 40,
            color: '#9ca3af',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          25 AGENTS.md files + 10 Routine Templates
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
