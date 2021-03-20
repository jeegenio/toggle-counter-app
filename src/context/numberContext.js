import React, {createContext,useState} from 'react';
// import NumberProvider from './context/NumberContext';

export const NumContext = createContext();

function NumberProvider ({children}) {
   
const [state,setState] = useState(0);
const [toggle,setToggle] = useState(false)
const [statetwo,setStatetwo] = useState(0);


return <NumContext.Provider value={{state,statetwo,toggle, setState,setStatetwo,setToggle}}>
{children}
</NumContext.Provider>

}
export default NumberProvider;
