import Link from 'next/link'

import {getSettings} from '@/lib/content'

export default async function Header() {
  const settings = await getSettings()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          {settings.title}
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/writing">Writing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
