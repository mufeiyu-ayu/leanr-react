// 更新state中的对象
import { useState } from 'react'
export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'jack',
    lastName: 'hahaha',
    email: '2382839430@qq.com'
  })

  function handleFirstName(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }

  function handleLastName(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    })
  }

  function handleEmail(e) {
    setPerson({
      ...person,
      email: e.target.value
    })
  }

  return (
    <>
      <div>
        <label>firstName:</label>
        <input type='text' onChange={handleFirstName} value={person.firstName} />
      </div>
      <div>
        <label>lastName:</label>
        <input type='text' onChange={handleLastName} value={person.lastName} />
      </div>
      <div>
        <label>email:</label>
        <input type='text' onChange={handleEmail} value={person.email} />
      </div>
      <div>
        {person.firstName}--{person.lastName}--{person.email}
      </div>
    </>
  )
}
