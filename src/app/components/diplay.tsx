'use client'
let showRecarga: boolean = true
export default function Display ({ texto, error, onRecarga }: { texto?: string, error: boolean, onRecarga?: any }) {
  // console.log('display ' + error)

  const classError = error ? 'text-white bg-red-600' : 'text-black bg-white'
  return (
    <div className="border p-1">
      <div className={'border p-2 h-20  text-2xl font-bold text-center align-middle ' + classError}>
        <span>{texto}</span>
        <button type="button" onClick={(e) => {
          onRecarga(showRecarga)
          showRecarga = !showRecarga
          console.log(showRecarga)
        }} className="float-right text-xs p-2 border rounded-md bg-gray-400 text-black hover:bg-slate-700 hover:text-white ">
          {showRecarga ? 'Recargas' : 'Retiros'}</button>
      </div>
    </div>
  )
}
