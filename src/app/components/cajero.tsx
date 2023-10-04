'use client'

import { useEffect, useState } from 'react'
import Display from './diplay'
import Keyboard from './keyboard'
import Recargas from './recargas'
import { type Series } from '../interfaces/series'

let sumaRetiro: number = 0

let saldo: Series = {
  1000: 10,
  500: 10,
  200: 4,
  100: 4
}
export default function Cajero () {
  const [saldos, setSaldos] = useState<Series>(saldo)

  const retiros: Series = {
    1000: 0,
    500: 0,
    200: 0,
    100: 0
  }

  const [texto, setTexto] = useState('')
  const [showRecarga, setShowRecarga] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    console.log('Saldo después del cambio:', saldos)
  }, [saldos])

  const recargar = (saldos: Series) => {
    console.log('retorno de recarga', saldos)

    setSaldos(saldos)
    saldo = saldos
    setShowRecarga(false)
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
    const getSerie = (denominacion: keyof Series) => {
      if (
        saldo[denominacion] > 0 &&
        sumaRetiro < monto &&
        sumaRetiro + denominacion <= monto
      ) {
        sumaRetiro += denominacion
        saldo[denominacion] -= 1
        retiros[denominacion] += 1
        console.log(denominacion, saldo[denominacion], sumaRetiro, monto)
      }
    }

    getSerie(1000)
    getSerie(500)
    getSerie(200)
    getSerie(100)

    if (sumaRetiro < monto) {
      // Agrega tu lógica de condición de parada para la recursión
      getRetiros(monto)
    }

    setSaldos(saldo)

    console.log('El saldo es ', saldos)

    return sumaRetiro
  }

  const pressEnter = (texto: number) => {
    // console.log('pressEnter ' + isError)

    const hasError = !validarRetiro(texto)

    if (hasError) {
      setTexto('No se puede retirar ese monto')
      sumaRetiro = 1
      setIsError(true)
      return true
    }
    const montoRetirar = getRetiros(texto)
    console.log(montoRetirar, saldo, retiros)

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
    // console.log('suamRetiro ', sumaRetiro)

    if (sumaRetiro > 0) {
      setTimeout(() => {
        setTexto('')
        sumaRetiro = 0
        console.log('Limpiar pantalla')
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
          <Recargas recargar={recargar} saldos={saldos} />
            )
          : (
          <Keyboard keyPress={sendKey} />
            )}
      </div>
    </div>
  )
}
