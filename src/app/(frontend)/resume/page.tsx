import React from 'react'

export const metadata = {
  title: 'Resume',
}

export default function ResumePage() {
  return (
    <>
      <header className="page-hero">
        <h1>Resume</h1>
        <p>
          Product designer turned self-taught frontend developer — shaping
          developer experiences for cloud systems at Google.
        </p>
        <p className="resume__actions">
          <a className="resume__download" href="mailto:hello@yashraj.cc">
            Request PDF
          </a>
          <span className="resume__actions-sep" aria-hidden="true">
            ·
          </span>
          <a href="mailto:hello@yashraj.cc">Reach out</a>
        </p>
      </header>

      <section className="resume-block" aria-labelledby="resume-now">
        <h2 id="resume-now">Now</h2>
        <div className="resume-role">
          <div className="resume-role__meta">
            <strong>Google</strong>
            <span>Present</span>
          </div>
          <p>
            Work across Cloud, Maps, and YouTube-adjacent surfaces — designing
            and building developer experiences that help people use systems at
            scale without drowning in their complexity.
          </p>
        </div>
      </section>

      <section className="resume-block" aria-labelledby="resume-focus">
        <h2 id="resume-focus">Focus</h2>
        <ul className="resume-chips">
          <li>Developer Experience</li>
          <li>Frontend Engineering</li>
          <li>Systems at Scale</li>
          <li>Cloud Infra</li>
          <li>Dev Tooling</li>
          <li>Socio-technical Design</li>
        </ul>
      </section>

      <section className="resume-block" aria-labelledby="resume-select">
        <h2 id="resume-select">Selected threads</h2>
        <ul className="resume-list">
          <li>
            <strong>Developer experiences</strong>
            <span>
              Interfaces and flows that make complex cloud systems feel
              operable.
            </span>
          </li>
          <li>
            <strong>0→1 products</strong>
            <span>
              From product framing through frontend implementation when the
              brief is still forming.
            </span>
          </li>
          <li>
            <strong>Self-taught craft</strong>
            <span>
              Design roots, engineering practice — bridging both sides of the
              tooling stack.
            </span>
          </li>
        </ul>
      </section>
    </>
  )
}
