import React, { useState } from 'react'

const App = () => {

  // method 1
  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log('form submited')
  // }

  // method 2
  // const [name, setName] = useState('')
  // const submitHandler = () => {
  //   e.preventDefault()
  //   console.log('submited')
  // }

  // method 3
  // const [title, setTitle] = useState('')
  // const [allUsers, setallUsers] = useState(['harsh'])

  // const submitHandler = (e) => {
  //   e.preventDefault()

  //   const oldUsers = [...allUsers];
  //   oldUsers.push(title)
  //   setallUsers(oldUsers)

  //   // setallUsers([...allUsers,title])   //  isko destructing bol ta hsi

  //   setTitle('')
  // }




  // This Part is project Part

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  
  const [allUsers, setallUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title,email)

    const oldUsers = [...allUsers]
    oldUsers.push({title,email})
    setallUsers(oldUsers)
    console.log(oldUsers)

    setTitle('');
    setEmail('');
  }



  return (

    <div>

       {/* This part all concept in lecture */}
      <div>
        {/* method 1 tum ye place par directly intreact kar rahe ho Dom ka sath */}
        {/* <form onSubmit={(e) =>{
        submitHandler(e)
      }}>
         <input type="text" placeholder='Enter Name' />
         <button>Click Me</button>
      </form> */}

        {/* method 2 yehapar use problem ko solve karna ke liye solution hai TO Way Binding */}

        {/* <form onSubmit={(e) => {
        submitHandler(e)
        console.log(name)
        setName('')
      }}>
         <input 
         type="text" 
         placeholder='Enter name' 
         required
         value = {name}
         onChange={(e) => {
          setName(e.target.value)
         }}
         />
         <button>Click</button>
      </form> */}

        {/* method 3 me jobhi input me pass kya oo ek card ban jayega esa code likhena hai */}
        {/* <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input
            type="text"
            placeholder='Enter Name'
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <button>Click karo</button>
        </form> */}

        {/* {allUsers.map(function (elem, idx) {
          return <h1 key={idx}>{elem}</h1>
        })} */}
      </div>


      {/* This part is project part */}
      <div>        
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <input 
          type="text"
          placeholder='Enter Name'
          value={title}
          required
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
          <input 
          type="text"
          placeholder='Enter Email'
          value={email}
          required
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          />
          <button>Click me</button>

        </form>

        {allUsers.map(function(elem,idx){
          return <div key={idx}>
             <h2>{elem.title}</h2>
             <p>{elem.email}</p>
          </div>
        })}
      </div>

    </div>

  )
}

export default App