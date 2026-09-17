import { useEffect, useState } from 'react'

const PAIN_PHRASES = [
  'No CUDA rabbit holes.',
  'No ComfyUI install guides.',
  'No babysitting a GPU.',
] as const

export default function App() {
  const [painIndex, setPainIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setPainIndex((i) => (i + 1) % PAIN_PHRASES.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="page">
      <header className="topbar">
        <a className="logo" href="/">
          <span className="logo-bracket">[</span>
          evening
          <span className="logo-bracket">]</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#contrast">contrast</a>
          <a href="#telegram">telegram</a>
          <a href="#github">github</a>
        </nav>
      </header>

      <main>
        {/* 1. Hero — two things + optional dynamic line */}
        <section className="hero">
          <h1>Self-hosted AI video gen in minutes.</h1>
          <p className="hero-sub">
            Skip installing ComfyUI, hunting models, and babysitting a GPU.
          </p>
          <p className="hero-dynamic" aria-live="polite">
            <span className="dyn-prompt" aria-hidden="true">
              →{' '}
            </span>
            {PAIN_PHRASES[painIndex]}
          </p>
          <div className="cta-row">
            <a className="cta cta-primary" href="#telegram">
              Open in Telegram
            </a>
            <a className="cta cta-secondary" href="#github">
              Star on GitHub
            </a>
          </div>
        </section>

        {/* 2. One before → after visual */}
        <section
          className="section contrast"
          id="contrast"
          aria-labelledby="contrast-title"
        >
          <h2 id="contrast-title" className="sr-only">
            The usual way vs With Evening
          </h2>

          <div className="ba-grid">
            <div className="ba-card ba-before">
              <p className="ba-label">The usual way</p>
              <ul className="ba-list">
                <li>Fight CUDA &amp; drivers</li>
                <li>Install ComfyUI “right”</li>
                <li>Hunt models &amp; nodes</li>
                <li>Babysit a remote GPU</li>
              </ul>
              <p className="ba-foot ba-foot-bad">Hours before one frame</p>
            </div>

            <div className="ba-arrow" aria-hidden="true">
              →
            </div>

            <div className="ba-card ba-after">
              <p className="ba-label">With Evening</p>
              <ol className="ba-flow">
                <li>Telegram</li>
                <li>GPU up</li>
                <li>Clip</li>
                <li>Auto-stop</li>
              </ol>
              <p className="ba-foot ba-foot-ok">Minutes. Your GPU.</p>
            </div>
          </div>
        </section>

        {/* 3. One proof — Telegram mock */}
        <section className="section proof" aria-label="Telegram chat proof">
          <div className="term-chat" id="telegram">
            <div className="term-chrome">
              <span className="term-dots" aria-hidden="true">
                ● ● ●
              </span>
              <span className="term-title">telegram · @evening_bot</span>
            </div>
            <div className="term-body">
              <div className="line line-you">
                <span className="who">you</span>
                <span className="msg">
                  /spin neon alley, rain, push-in, 5s
                </span>
              </div>
              <div className="line line-bot">
                <span className="who">evening</span>
                <span className="msg">
                  GPU ready · ~$0.34/hr · auto-stop
                  <br />
                  <span className="btn-fake">[ Spin up ]</span>
                </span>
              </div>
              <div className="line line-bot">
                <span className="who">evening</span>
                <span className="msg">
                  clip_ready.mp4 · pod stopping · $0.12
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quiet OSS line only */}
        <p className="oss-line">
          Open source · bring your own GPU key. Premium exists if you skip infra.
        </p>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <span className="logo-sm">
            <span className="logo-bracket">[</span>
            evening
            <span className="logo-bracket">]</span>
          </span>
          <span>your GPU from Telegram</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#telegram">Telegram</a>
          <a href="#github">GitHub</a>
        </nav>
      </footer>

      <div id="github" hidden />
    </div>
  )
}
