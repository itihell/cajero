'use client'
export default function ButtonNumber ({
  texto,
  keyPress,
  error
}: {
  texto: string
  keyPress?: any
  error?: boolean
}) {
  const sendKey = (key: string) => {
    keyPress(key)
  }
  return (
    <div
      className="border  bg-gradient-to-t from-gray-600  w-1/3 m-1 flex flex-col items-center hover:cursor-pointer hover:bg-gray-700"
      onClick={(e) => {
        sendKey(texto)
      }}
    >
      <div className="h-36 font-bold text-3xl flex flex-col justify-center text-white">
        <span>{texto}</span>
      </div>
    </div>
  )
}
