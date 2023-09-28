'use client'

import { useState } from 'react'
import Display from './diplay'
import Keyboard from './keyboard'

interface Series {
  1000: number
  500: number
  200: number
  100: number
}

const saldo: Series = {
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

  const [texto, setTexto] = useState('')
  const [isError, setIsError] = useState(false)

  const validarRetiro = (monto: number): boolean => {
    if (monto % 1000 === 0) {
      return true
    }
    if (monto % 500 === 0) {
      return true
    }

    if (monto % 200 === 0) {
      return true
    }

    if (monto % 100 === 0) {
      return true
    }

    return false
  }

  const getRetiros = (monto: number) => {
    if (saldo[1000] > 0 && sumaRetiro < monto && monto >= 1000) {
      sumaRetiro += 1000
      saldo[1000] -= 1
      retiros[1000] += 1
    }

    if (saldo[500] > 0 && sumaRetiro < monto && monto >= 500) {
      sumaRetiro += 500
      saldo[500] -= 1
      retiros[500] += 1
    }

    if (saldo[200] > 0 && sumaRetiro < monto && monto >= 200) {
      sumaRetiro += 200
      saldo[200] -= 1
      retiros[200] += 1
    }

    if (saldo[100] > 0 && sumaRetiro < monto && monto >= 100) {
      sumaRetiro += 100
      saldo[100] -= 1
      retiros[100] += 1
    }

    // TODO: Condicion para validar la recursividad
    if (sumaRetiro < monto) {
      getRetiros(monto)
    }

    return sumaRetiro
  }

  const pressEnter = (texto: number) => {
    console.log('pressEnter ' + isError)

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
    console.log('suamRetiro ', sumaRetiro)

    if (sumaRetiro > 0) {
      setTimeout(() => {
        setTexto('')
        sumaRetiro = 0
        console.log('Limpiar pantalla')
      }, 50)
    }

    if (key === 'Cancelar') {
      pressCancelar()
      return
    }

    if (key === 'Enter') {
      pressEnter(parseInt(texto))
      return
    }
    setTexto(texto + key)
  }
  return (
    <div className="border p-3 bg-gray-500">
      <div className="border p-5 bg-gray-400">
        <Display texto={texto} error={isError} />
        <Keyboard keyPress={sendKey} />
      </div>
    </div>
  )
}
