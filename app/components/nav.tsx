import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'Projects',
  },
  'https://leetcode.com/u/jaisai9/': {
    name: 'Leetcode',
  },
  'https://www.linkedin.com/in/jaikritha29/': {
    name: 'LinkedIn',
  },
  'mailto:b24cm1017@iitj.ac.in': { // Note: Fixed the address to include '@' instead of '.' based on standard IIT format
    name: 'Email',
  },
  'tel:+91 8897175998': { // Replace with your actual phone number
    name: 'Phone',
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
