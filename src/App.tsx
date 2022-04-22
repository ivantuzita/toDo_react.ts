import './App.css';
import React, { useState } from "react";
import InputField from './components/InputField';

const App:React.FC = () => {

  const [toDo, setToDo] = useState<string >("");

  console.log(toDo)

  return(
  <div className="App">
    <span className="NavBar">ToDo</span>
    <InputField toDo={toDo} setToDo = {setToDo}/>
  </div>
  );
}

export default App;
