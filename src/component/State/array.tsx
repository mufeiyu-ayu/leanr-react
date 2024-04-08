import { useState } from 'react'
let nextIndex = 0
type Arr = {
  id: number
  name: string
}
export default function ArrayState() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Arr[]>([])

  return (
    <>
      <h1>晚上没睡觉的人：</h1>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setArtists([
              ...artists,
              {
                id: nextIndex++,
                name: name
              }
            ])
            setName('')
          }}
        >
          添加
        </button>
        <ul>
          {artists.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
