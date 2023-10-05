'use client'

import { useState } from 'react'
import Display from './diplay'
import Keyboard from './keyboard'
import Recargas from './recargas'
import { type Series } from '../interfaces/series'

let saldo: Series = {
  1000: 10,
  500: 10,
  200: 4,
  100: 4
}
let sumaRetiro: number = 0
export default function Cajero () {
  const retiros: Series = {
    1000: 0,
    500: 0,
    200: 0,
    100: 0
  }

  const [saldos, setSaldos] = useState<Series>({ ...saldo })
  const [texto, setTexto] = useState('')
  const [showRecarga, setShowRecarga] = useState(false)
  const [isError, setIsError] = useState(false)

  const recargar = (data: Series) => {
    setSaldos({ ...data })
    saldo = { ...data }
  }

  const validarRetiro = (monto: number): boolean => {
    return (
      monto % 1000 === 0 ||
      monto % 500 === 0 ||
      monto % 200 === 0 ||
      monto % 100 === 0
    )
  }

  const getRetiros = (monto: number) => {
    const retirarMonto = (denominacion: keyof Series) => {
      if (
        saldo[denominacion] > 0 &&
        sumaRetiro < monto &&
        sumaRetiro + denominacion <= monto
      ) {
        sumaRetiro += denominacion
        saldo[denominacion] -= 1
        retiros[denominacion] += 1
      }
    }

    retirarMonto(1000)
    retirarMonto(500)
    retirarMonto(200)
    retirarMonto(100)

    if (sumaRetiro < monto) {
      getRetiros(monto)
    }

    setSaldos({ ...saldo })

    return sumaRetiro
  }

  const pressEnter = (texto: number) => {
    const hasError = !validarRetiro(texto)

    if (hasError) {
      setTexto('No se puede retirar ese monto')
      sumaRetiro = 1
      setIsError(true)
      return true
    }
    getRetiros(texto)

    const aRetirar = `
    [1000:${retiros[1000]}],
    [500:${retiros[500]}],
    [200:${retiros[200]}],
    [100:${retiros[100]}]
       `

    setTexto(aRetirar)
  }

  const pressCancelar = () => {
    setTexto('')
  }

  const sendKey = (key: string) => {
    if (sumaRetiro > 0) {
      setTimeout(() => {
        setTexto('')
        sumaRetiro = 0
      }, 50)
    }

    if (key === 'Cancelar') {
      pressCancelar()
      setIsError(false)
      return
    }

    if (key === 'Enter') {
      pressEnter(parseInt(texto))
      return
    }
    setIsError(false)
    setTexto(texto + key)
  }
  const hadleRecarga = (recarga: boolean) => {
    setShowRecarga(recarga)
  }
  return (
    <div className="border p-3 bg-gray-500">
      <div className="border p-5 bg-gray-400">
        <Display texto={texto} error={isError} onRecarga={hadleRecarga} />

        {showRecarga
          ? (
          <Recargas recargar={recargar} saldo={saldos} />
            )
          : (
          <Keyboard keyPress={sendKey} />
            )}
      </div>
    </div>
  )
}
