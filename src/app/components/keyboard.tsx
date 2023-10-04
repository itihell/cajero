'use client'
import ButtonNumber from './buttonNumber'

export default function Keyboard ({ keyPress, error }: { keyPress?: any, error?: boolean }) {
  const sendKey = (key: string) => {
    keyPress(key)
    // console.log(`keyborad ${key}`)
  }
  return (
    <div className="mt-5 border p-1 ">
      <div className="flex flex-row justify-between">
        <ButtonNumber texto="7" keyPress={sendKey} />
        <ButtonNumber texto="8" keyPress={sendKey} />
        <ButtonNumber texto="9" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <ButtonNumber texto="4" keyPress={sendKey} />
        <ButtonNumber texto="5" keyPress={sendKey} />
        <ButtonNumber texto="6" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <ButtonNumber texto="1" keyPress={sendKey} />
        <ButtonNumber texto="2" keyPress={sendKey} />
        <ButtonNumber texto="3" keyPress={sendKey} />
      </div>
      <div className="flex flex-row justify-between">
        <ButtonNumber texto="Cancelar" keyPress={sendKey} />
        <ButtonNumber texto="0" keyPress={sendKey} />
        <ButtonNumber texto="Enter" keyPress={sendKey} />
      </div>
    </div>
  )
}
