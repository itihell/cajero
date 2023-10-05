import { useEffect, useState } from 'react'
import { type Series } from '../interfaces/series'
export default function Regargas ({
  saldo,
  recargar
}: {
  saldo: Series
  recargar: (saldo: Series) => void
}) {
  const [saldos, setSaldos] = useState<Series>(saldo)
  const [perrito, setPerrito] = useState('')

  const changeSaldo = (denominacion: keyof Series, value: number) => {
    saldo[denominacion] = value
    setSaldos({ ...saldo })
  }

  useEffect(() => {
    console.log('llamando al useEffect')
  }, [saldos])

  useEffect(() => {
    console.log('llamando al useEffect perrito')
  }, [perrito])

  return (
    <div className="mt-2 border p-1 ">
      <div className="border p-1">
        <div className="flex justify-between">
          <label>Billetes de 1000</label>
          <input
            defaultValue={saldos[1000]}
            type="number"
            className="border ml-1 rounded p-2"
            onChange={(e) => {
              changeSaldo(1000, parseInt(e.target.value))
            }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <label>Billetes de 500</label>
          <input
            defaultValue={saldos[500]}
            onChange={(e) => {
              changeSaldo(500, parseInt(e.target.value))
            }}
            type="number"
            className="border ml-1 rounded p-2"
          />
        </div>

        <div className="flex justify-between mt-2">
          <label>Billetes de 200</label>
          <input
            defaultValue={saldos[200]}
            onChange={(e) => {
              changeSaldo(200, parseInt(e.target.value))
            }}
            type="number"
            className="border ml-1 rounded p-2"
          />
        </div>

        <div className="flex justify-between mt-2 ">
          <label>Billetes de 100</label>
          <input
            defaultValue={saldos[100]}
            onChange={(e) => {
              changeSaldo(100, parseInt(e.target.value))
            }}
            type="number"
            className="border ml-1 rounded p-2"
          />
        </div>

        <div className="flex justify-center mt-2   ">
          <button
            type="button" onClick={(e) => {
              recargar(saldos)
              setPerrito('perrito')
            }}
            className="bg-slate-900 text-slate-500 hover:bg-slate-700 hover:text-slate-900 border border-green-950 rounded-lg p-3"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
