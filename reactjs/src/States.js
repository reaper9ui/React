
import { useContext, useEffect, useState } from "react"; 

export const useToggle = (initialVal = false) => {
    
    const[state, setState] = useState(false);

    const toggle = () =>{
        setState((prev) => !prev)
    }

    return [state, toggle]

}

/* const[isVisible, setVisible] = useState(false); 

const changeVisibility = () => {
    setVisible(!isVisible);
} */