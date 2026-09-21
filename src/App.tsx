import { useEffect, useState } from 'react'

const PAIN_PHRASES = [
  'No CUDA rabbit holes.',
  'No ComfyUI install guides.',
  'No babysitting idle GPUs.',
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
          <a href="#how">how</a>
          <a href="#faq">faq</a>
          <a href="#telegram">telegram</a>
          <a href="#github">github</a>
        </nav>
      </header>

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <h1>Self-hosted AI video in minutes — without installing ComfyUI.</h1>
          <p className="hero-sub">
            Paste your RunPod API key in Telegram. We spin a ComfyUI pod, run a prebuilt workflow, send the MP4, and shut the machine off. Open source. You pay the GPU — not another credit farm.
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
          <div className="chips">
            <span className="chip">BYO RunPod</span>
            <span className="chip">auto-stop</span>
            <span className="chip">OSS</span>
          </div>
        </section>

        {/* 2. Telegram chat mock */}
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
                  neon alley, rain, cinematic push-in, 5s
                </span>
              </div>
              <div className="line line-bot">
                <span className="who">evening</span>
                <span className="msg">
                  Pod ready · ~$0.34/hr · confirm to spin
                  <br />
                  <span className="btn-fake">[ Confirm ]</span>
                </span>
              </div>
              <div className="line line-bot">
                <span className="who">evening</span>
                <span className="msg">
                  Spinning ComfyUI pod...
                </span>
              </div>
              <div className="line line-bot">
                <span className="who">evening</span>
                <span className="msg">
                  clip_ready.mp4 · pod stopped · $0.12
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Honest vs Unsloth */}
        <section
          className="section contrast"
          id="contrast"
          aria-labelledby="contrast-title"
        >
          <h2 id="contrast-title">Honest vs Unsloth</h2>

          <div className="compare-table">
            <div className="compare-row compare-header">
              <div className="compare-cell"></div>
              <div className="compare-cell">Unsloth Desktop</div>
              <div className="compare-cell">Evening</div>
            </div>
            <div className="compare-row">
              <div className="compare-cell compare-label">Interface</div>
              <div className="compare-cell">Local desktop studio + browser remote</div>
              <div className="compare-cell">Telegram + ephemeral RunPod ComfyUI</div>
            </div>
          </div>
        </section>

        {/* 4. Headache math */}
        <section className="section headache" aria-labelledby="headache-title">
          <h2 id="headache-title">The setup tax</h2>
          <div className="headache-grid">
            <div className="headache-item">
              <p className="headache-label">Install CUDA drivers</p>
              <p className="headache-time">~2 hours</p>
            </div>
            <div className="headache-item">
              <p className="headache-label">Set up ComfyUI environment</p>
              <p className="headache-time">~1 hour</p>
            </div>
            <div className="headache-item">
              <p className="headache-label">Download models (40GB+)</p>
              <p className="headache-time">~3 hours</p>
            </div>
            <div className="headache-item">
              <p className="headache-label">Idle pod overnight</p>
              <p className="headache-time">$$$</p>
            </div>
          </div>
          <p className="headache-vs">→ Evening: paste key, generate, auto-stop.</p>
        </section>

        {/* 5. How it works */}
        <section className="section how" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How it works</h2>
          <ol className="how-steps">
            <li>
              <span className="how-num">1</span>
              <div className="how-content">
                <h3 className="how-step-title">Paste your RunPod API key</h3>
                <p className="how-step-desc">Send it once in Telegram. We store it securely.</p>
              </div>
            </li>
            <li>
              <span className="how-num">2</span>
              <div className="how-content">
                <h3 className="how-step-title">Pod spins + workflow runs</h3>
                <p className="how-step-desc">We start a ComfyUI pod with a prebuilt video workflow, queue your prompt, and wait.</p>
              </div>
            </li>
            <li>
              <span className="how-num">3</span>
              <div className="how-content">
                <h3 className="how-step-title">Clip delivered + pod stops</h3>
                <p className="how-step-desc">MP4 arrives in chat. Pod shuts down. You pay RunPod for minutes used.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* 6. Three paths */}
        <section className="section paths" aria-labelledby="paths-title">
          <h2 id="paths-title">Three paths</h2>
          <div className="paths-grid">
            <div className="path-card path-oss">
              <h3 className="path-name">OSS · BYO RunPod</h3>
              <p className="path-desc">
                Free bot, your API key. You pay RunPod directly for GPU time.
              </p>
            </div>
            <div className="path-card path-premium">
              <h3 className="path-name">Premium convenience</h3>
              <p className="path-desc">
                Skip key setup. We handle orchestration. Coming soon.
              </p>
            </div>
            <div className="path-card path-hosted">
              <h3 className="path-name">Hosted (optional)</h3>
              <p className="path-desc">
                Zero infra. Secondary option for those who want fully managed.
              </p>
            </div>
          </div>
        </section>

        {/* 7. What we are not */}
        <section className="section not" aria-labelledby="not-title">
          <h2 id="not-title">What we are not</h2>
          <ul className="not-list">
            <li>Not a Kling/Sora/Veo reseller with markup credits</li>
            <li>Not a Mac-local Draw Things clone</li>
            <li>Not "40 models in one subscription" aggregator</li>
          </ul>
        </section>

        {/* 8. FAQ */}
        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">FAQ</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-q">Where does my RunPod key live?</h3>
              <p className="faq-a">
                Stored encrypted in our bot backend. You can revoke it anytime via RunPod dashboard. OSS path: run your own bot, keep keys local.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Who bills the GPU time?</h3>
              <p className="faq-a">
                RunPod bills you directly. Evening orchestrates; we don't mark up compute.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">What models and workflows today?</h3>
              <p className="faq-a">
                Prebuilt ComfyUI templates for Wan, LTX, and similar open video models. Check GitHub for the current list.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Can I fork and run my own?</h3>
              <p className="faq-a">
                Yes. Core bot is open source. Clone, deploy, connect your Telegram token and RunPod orchestration.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section final-cta" aria-label="Final call to action">
          <div className="cta-row">
            <a className="cta cta-primary" href="#telegram">
              Open in Telegram
            </a>
            <a className="cta cta-secondary" href="#github">
              Star on GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <span className="logo-sm">
            <span className="logo-bracket">[</span>
            evening
            <span className="logo-bracket">]</span>
          </span>
          <span>self-hosted AI video from Telegram</span>
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
