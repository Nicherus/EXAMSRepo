import React, { createContext, useState } from 'react';
const Context = createContext();
export default Context;

export function UserContextProvider(props){
    const [test, setTest] = useState('')

    return(
        <Context.Provider value={{test, setTest}}>
            {props.children}
        </Context.Provider>
    );
}
