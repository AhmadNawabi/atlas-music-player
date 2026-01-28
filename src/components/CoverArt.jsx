export default function CoverArt() {
  return (
    <div className="
      h-[280px] w-[380px] overflow-hidden rounded-xl
      relative
      before:absolute before:inset-0 before:rounded-xl
      before:border-t before:border-t-transparent
      before:bg-gradient-to-r before:from-transparent before:via-gray-300/40 before:to-transparent
      dark:before:via-gray-500/30
    ">
      <img src="/images/cover-art.png" alt="Album cover" className="h-full w-full object-cover rounded-xl" />

    </div>
  )
}
