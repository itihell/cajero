'use client'
export default function Display ({ texto }: { texto?: string }) {
  return (
    <div className="border p-1">
      <div className="border p-2 h-20 bg-white text-2xl font-bold text-center align-middle">
        <span>{texto}</span>
      </div>
    </div>
  )
}
