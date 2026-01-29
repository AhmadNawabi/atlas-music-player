import { useTheme } from './ThemeContext.jsx'
import { Sun, Moon } from 'lucide-react'

export default function Footer() {
  const { theme, toggleTheme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <div className="
      flex flex-col items-center justify-center
      p-4 md:px-6
      backdrop-blur-md
      transition-colors duration-300
      bg-panelBg/90 dark:bg-panelBg-dark/80
      border-t border-t-transparent
      relative
      before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
      before:bg-gradient-to-r before:from-transparent before:via-gray-300/40 before:to-transparent
      dark:before:via-gray-500/30
    ">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        © {year} Atlas School
      </p>
      <button
        onClick={toggleTheme}
        className="
          p-2 rounded-full
          bg-transparent
          cursor-pointer
          hover:bg-gray-200/60 dark:hover:bg-white/10
          transition-all duration-300
        "
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Sun strokeWidth={1} /> : <Moon strokeWidth={1} />}
      </button>
    </div>
  )
}
