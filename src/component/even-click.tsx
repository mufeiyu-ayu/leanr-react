// export default function Button() {
//   const handleClick = () => {
//     console.log('我被点击了')
//   }
//   return <button onClick={handleClick}> 按钮</button>
// }

function Button({ onClick, children }: Record<string, string>) {
  return <button onClick={onClick}>{children}</button>
}

function PlayButton({ movieName }: Record<string, string>) {
  function handlePlayClick() {
    alert(`正在播放 ${movieName}！`)
  }

  return <Button onClick={handlePlayClick} children={movieName} />
}

function UploadButton() {
  return <Button onClick={() => alert('正在上传！')}>上传图片</Button>
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName='魔女宅急便' />
      <UploadButton />
    </div>
  )
}
