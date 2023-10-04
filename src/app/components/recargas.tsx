import { useEffect, useState } from 'react'
import { type Series } from '../interfaces/series'

export default function Regargas ({ saldos, recargar }: { saldos: Series, recargar: any }) {
  const [saldo, setSaldos] = useState<Series>(saldos)
  useEffect(() => {
    console.log('desde la rergaa:', saldos)
  }, [])

  const changeSaldo = (clave: keyof Series, monto: number) => {
    setSaldos((preData) => ({ ...preData, [clave]: monto }))
  }

  const saveRecargas = () => {
    recargar(saldo)
  }
  return (
    <div className="border mt-3 p-1">
      <div className="border">
        <div className="m-3">
          <div className="relative z-0 w-full group mt-3">
            <input
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={saldo[1000]}
              onChange={(e) => {
                changeSaldo(1000, Number(e.target.value))
              }}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Billetes de 1000
            </label>
          </div>

          <div className="relative z-0 w-full group mt-3">
            <input
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={saldo[500]}
              onChange={(e) => {
                changeSaldo(500, Number(e.target.value))
              }}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Billetes de 500
            </label>
          </div>

          <div className="relative z-0 w-full group mt-3">
            <input
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={saldo[200]}
              onChange={(e) => {
                changeSaldo(200, Number(e.target.value))
              }}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Billetes de 200
            </label>
          </div>

          <div className="relative z-0 w-full group mt-3">
            <input
              type="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-800 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              defaultValue={saldo[100]}
              onChange={(e) => {
                changeSaldo(100, Number(e.target.value))
              }}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-green-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Billetes de 100
            </label>
          </div>
          <div className="relative z-0 w-full mt-3">
            <button type="button" onClick={() => {
              saveRecargas()
            }} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
