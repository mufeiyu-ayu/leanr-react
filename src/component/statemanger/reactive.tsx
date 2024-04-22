import { useState } from 'react'

export default function Form() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('typeing')

  if (status === 'success') {
    console.log('hello world')
    return <div>your ary right</div>
  }

  async function handleSubmit(e: Event) {
    e.preventDefault()
    setStatus('submitting')

    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setStatus('typing')
      setError(err)
    }
  }
  function handleTextareaChange(e) {
    setAnswer(e.target.value)
  }
  return (
    <>
      <h2>城市测验</h2>
      <p>哪个城市有把空气变成饮用水的广告牌？</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>提交</button>
        {error !== null && <p className='Error'>{error.message}</p>}
      </form>
    </>
  )
}

function submitForm(answer) {
  // 模拟接口请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('猜的不错，但答案不对。再试试看吧！'))
      } else {
        resolve()
      }
    }, 1500)
  })
}
