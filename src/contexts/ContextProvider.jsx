import { createContext, useContext, useState } from "react"

const stateContext = createContext()
// Global states
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

function ContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked,  setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    // Event Hnadler
    const handleClick = clicked => {
        setIsClicked({...initialState, [clicked]: isClicked[clicked] ? false : true})
    }

    return (
        <stateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}>
            {children}
        </stateContext.Provider>
    )
}

export function UseContext(){
    const context  = useContext(stateContext)
    if(!context) throw new Error("context was used outside of it's provider")
    return context
}

export default ContextProvider
