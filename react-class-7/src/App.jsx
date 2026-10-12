import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [text, setText] = useState('')
  const [Email, setEmail] = useState('')
  const [ImageUrl, setImageUrl] = useState('')
  const [desc, setdesc] = useState('')

  const localData = localStorage.getItem('all-users') || []

  // console.log(localData)

  const [allUsers, setallUsers] = useState([])

  const SubmitHandler = (e) => {

    e.preventDefault()

    const oldUser = [...allUsers]
    oldUser.push({ text, Email, ImageUrl, desc })
    setallUsers(oldUser)

    localStorage.setItem('all-users',JSON.stringify(oldUser))

    // setallUsers([...allUsers,{text, Email, ImageUrl, desc}])




    setEmail('')
    setImageUrl('')
    setText('')
    setdesc('')
  }

  const deleteHandler = (idx) => {
    const copydata = [...allUsers]

    // copydata.splice(idx,1)
    const conf = confirm("Are you really delete this element")
    if(conf){
      copydata.splice(idx,1)
    }
    else{
      alert("Element Not deleted")
    }

    setallUsers(copydata)
    localStorage.setItem('all-users',JSON.stringify(copydata))

  }

  return (
    <div>
      <form onSubmit={(e) => {
        SubmitHandler(e)
      }}>

        <input
          type="text"
          placeholder='Enter Name'
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter Email'
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter imgUrl'
          value={ImageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter desc'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button>Click Me</button>


      </form>

      {allUsers.map(function (elem, idx) {
        return <Card deleteHandler={deleteHandler} elem={elem} idx={idx}/>
       
      })}
    </div>
  )
}

export default App