import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';



function App() {
  const [name,setName] = useState('');
  
  const state = useSelector(function(state) {
    return state.demo;
  });
  const dispatch = useDispatch();

  const clickHandler = () => {
    const demo = {
      id:123432,
      name:name
    }

    dispatch({
      type:"CREATE",
      payload: demo
    })
    setName("");
  }


  console.log("frist attempt: ",state);

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={clickHandler}>Save</button>
      
      <h2>list</h2>
      {
        state.allDemo.map(demo=>{
          return(
            <h2>{demo.name}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
