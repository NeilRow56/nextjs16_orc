import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex h-14 shrink-0 items-center gap-2 border-t border-dashed'>
      <div className='mx-auto flex h-full w-full max-w-[1400px] items-center gap-1 border-r border-l border-dashed px-4 lg:gap-2 lg:px-6'>
        <p className='text-muted-foreground text-xs md:text-sm'>
          Built by{' '}
          <Link href='https://orcdev.com' className='underline' target='_blank'>
            OrcDev
          </Link>
          . The source code is available on{' '}
          <Link
            href='https://github.com/TheOrcDev/nextjs16-cache-components'
            className='underline'
            target='_blank'
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
