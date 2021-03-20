import  {useContext} from 'react';
import {NumContext} from '../context/numberContext'

function Display () {
    // const {state, setState} = useContext(NumContext);
    const {state,statetwo,toggle,setState,setStatetwo,setToggle} = useContext(NumContext)


    // function decriment () {
    //     updateState(dataState - 1);
    // }
    //  function increment () {
    //     updateState(dataState + 1);
    // }

// function Decrement() {
//     setState(state + 1)
// }
            // console.log(state);


    return (
        <div>

    <div style={{textAlign: 'center'}}>

     <p>Number1:{state}</p> 
     <p>Number2:{statetwo}</p>
    <p>Toggle:{toggle ? "1" : "2"}</p> 

     <button onClick={() => {  toggle ? setState(state - 1) : setStatetwo(statetwo -1)}}>dec</button>

     <button onClick= {() => {  toggle ? setState(state + 1) :  setStatetwo(statetwo + 1) }}>inc</button> 

     <button onClick={() =>  { toggle ? setState(0) : setStatetwo(0) }}>Reset</button>
     <br/>
     <br/>
     <button onClick={() => {
         setToggle(!toggle)
     }}>Toggle</button>

    </div>

        </div>
    )
    
}

export default Display
