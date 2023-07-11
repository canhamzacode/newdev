import { useState, } from "react"
export const useToggle = () => {
    const [state, setState] = useState(false);

    const togglState = () => {
        setState(!state)
    }
    return [state, togglState]
}