import React from 'react'

interface InputProps{
    toDo: string,
    setToDo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({toDo, setToDo}: InputProps) => {
  return (
    <form className='Input'>
        <input value={toDo}
        onChange= {(e)=>setToDo(e.target.value)}
        className="InputBox" type="input" placeholder='Enter new task:'></input>
        <button className="InputButton" type='submit'>Submit</button>
    </form>
  )
}

export default InputField