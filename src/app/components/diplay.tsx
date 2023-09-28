'use client'
export default function Display ({ texto, error }: { texto?: string, error: boolean }) {
  console.log('display ' + error)

  const classError = error ? 'text-white bg-red-600' : 'text-black bg-white'
  return (
    <div className="border p-1">
      <div className={'border p-2 h-20  text-2xl font-bold text-center align-middle ' + classError}>
        <span>{texto}</span>
      </div>
    </div>
  )
}
