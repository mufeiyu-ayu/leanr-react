import { useState } from 'react'

let nextId = 3
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
]

export default function BucketList() {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleToggleMyList(artworkId, nextSeen) {
    const myNextList = [...myList]
    const artwork = myNextList.find((a) => a.id === artworkId)
    artwork.seen = nextSeen
    setMyList(myNextList)
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const yourNextList = [...yourList]
    const artwork = yourNextList.find((a) => a.id === artworkId)
    artwork.seen = nextSeen
    setYourList(yourNextList)
  }

  return (
    <>
      <h1>艺术愿望清单</h1>
      <h2>我想看的艺术清单：</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>你想看的艺术清单：</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  )
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type='checkbox'
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked)
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}
