import { createContext, useContext, useReducer, useState } from "react"

const stateContext = createContext()
// Global states
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}
const reducer = (state, action) => {
    switch(action.type){
        case"test1":
        return{

        }
        default:
            throw new Error("unkown")
    }
}

function ContextProvider({children}) {
    const [{cart, chat, notification, userProfile}, dispatch] = useReducer(reducer, initialState)
    const [activeMenu, setActiveMenu] = useState(true)
    return (
        <stateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            chat,
            cart,
            notification,
            userProfile, 
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
