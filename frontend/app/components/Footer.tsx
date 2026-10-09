import {getSettings} from '@/lib/content'

export default async function Footer() {
  const settings = await getSettings()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {settings.title}
          {settings.email ? (
            <>
              {' · '}
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </>
          ) : null}
        </p>
        <p className="muted">Next.js + Sanity · mock content until CMS is connected</p>
      </div>
    </footer>
  )
}
