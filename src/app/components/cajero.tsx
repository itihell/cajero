'use client'

import { useState } from 'react'
import Display from './diplay'
import Keyboard from './keyboard'

export default function Cajero () {
  const [texto, setTexto] = useState('')

  const pressCancelar = () => {
    setTexto('')
  }

  const pressEnter = () => {
    setTexto('')
  }

  const sendKey = (key: string) => {
    if (key === 'Cancelar') {
      pressCancelar()
      return
    }

    if (key === 'Enter') {
      pressEnter()
      return
    }
    setTexto(texto + key)
  }
  return (
    <div className="border p-3 bg-gray-500">
      <div className="border p-5 bg-gray-400">
        <Display texto={texto} />
        <Keyboard keyPress={sendKey} />
      </div>
    </div>
  )
}
