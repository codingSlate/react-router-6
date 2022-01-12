import React, {useState}from 'react'
const Login = ({authFn}) =>{
  const [form, setForm] = useState({name:''})

  const changeHandler =(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
  e.preventDefault()
    if(form === "123"){
      authFn(true)
    }
    authFn(false)
  }
  console.log(form)
    return(
    <div>
      <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} name="name" onChange={changeHandler}/>
      <button type="submit">Login
      </button>
      </form>
    </div>
    )
}
export default Login