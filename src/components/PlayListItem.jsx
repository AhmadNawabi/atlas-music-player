export default function PlayListItem({ title, artist, duration, active }) {
  return (
    <div className={`flex justify-between items-center p-3 rounded-md cursor-pointer transition-colors duration-200
      ${active ? 'bg-blue-300 text-white' : 'hover:bg-gray-100'}`}>
      <div>
        <p className="font-medium text-text dark:text-text-dark">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{artist}</p>
      </div>
      <span className={`text-sm ${active ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`}>{duration}</span>
    </div>
  )
}
