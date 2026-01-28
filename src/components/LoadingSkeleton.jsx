export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-64 rounded-xl bg-controlBg" />
      <div className="h-4 w-1/2 rounded bg-controlBg" />
      <div className="h-4 w-1/3 rounded bg-controlBg" />

      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-16 rounded-xl bg-controlBg" />
      ))}
    </div>
  )
}
