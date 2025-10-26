export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Garage - 4'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern application built with Next.js'

export const navItems = {
  header: [
    {
      label: 'Docs',
      href: '/docs'
    },
    {
      label: 'Components',
      href: '/docs/components/accordion'
    }
  ]
}
