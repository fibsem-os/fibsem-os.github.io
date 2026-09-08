import 'nextra-theme-docs/style.css'

import type { ReactNode } from 'react'
import { getPageMap } from 'nextra/page-map'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import Logo from '../Logo'

export const metadata = {
  title: 'fibsemOS Docs',
  description:
    'Documentation for fibsemOS – unified control software for FIB-SEM microscopy.'
}

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap('/docs')

  return (
    <Layout
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/fibsem-os/fibsem-os.github.io/tree/main/src/app/docs"
      sidebar={{ autoCollapse: true }}
      navbar={
        <Navbar
          logo={
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Logo className="h-5" />
              <span style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Docs</span>
            </span>
          }
          projectLink="https://github.com/fibsem-os/fibsem-os"
        />
      }
      footer={
        <Footer>
          <small>© 2026 fibsemOS Contributors. Open source under MIT license.</small>
        </Footer>
      }
      search={<Search placeholder="Search docs…" />}
    >
      {children}
    </Layout>
  )
}

