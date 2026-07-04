function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://w3.org">
      <path d="M2.07102 11.3494L0.963047 10.2415L9.20173 2.00274H2.83252V0.4375H11.5625V9.16748H9.99726V2.79827L2.07102 11.3494Z" fill="currentColor"/>
    </svg>
  ) 
} 

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-4 md:space-y-0 text-neutral-600 dark:text-neutral-300">
        <li>
          <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" rel="noopener noreferrer" target="_blank" href="https://github.com">
            <ArrowIcon />
            <p className="ml-2 h-7">https://github.com/jai-time29</p>
          </a>
        </li>
        <li>
          <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" rel="noopener noreferrer" target="_blank" href="https://leetcode.com">
            <ArrowIcon />
            <p className="ml-2 h-7">https://leetcode.com/u/jaisai9/</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} | Indian Institute of Technology Jodhpur (2024-28) 
      </p>
    </footer>
  )
}
