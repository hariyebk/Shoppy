import { useEffect } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {BsChatLeft} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri"
import {MdKeyboardArrowDown} from "react-icons/md"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import avatar from "../data/data/avatar.jpg"
import {Cart, Chat, Notification, UserProfile} from "."
import { UseContext } from "../contexts/ContextProvider"


// Reusable nav button
function NavButton({title, customfunc, icon, color, dotColor}){
    return(
    <TooltipComponent  content={title} position="BottomCenter">
        <button 
        type = "button" 
        style={{color}}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        onClick={customfunc}
        >
            <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "> </span>
            {icon}
        </button>
    </TooltipComponent>
    )
}

function NavBar() {
    const {setActiveMenu, isClicked, handleClick, screenSize, setScreenSize} = UseContext()

    useEffect(() => {
        // A function that sets the screenSize state to the current width of the screen on initial render.
        const handleResize = () => setScreenSize(window.innerWidth)
        // An event listener that sets the screensize state when the window resizes.
        window.addEventListener("resize", handleResize)
        handleResize()
        // Clean-up function
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    useEffect(() => {
        if(screenSize <= 900){
            setActiveMenu(false)
        }
        else{
            setActiveMenu(true)
        }
    }, [screenSize, setActiveMenu])


    return <>
            <div className="flex justify-between p-2 md:mx-6 relative">
                {/* Menu button */}
                <NavButton 
                title= "Menu" 
                customfunc={() => setActiveMenu(activeMenu => !activeMenu)}
                color="blue"
                icon={<AiOutlineMenu />}
                />
                <div className="flex">
                    {/* cart button */}
                    <NavButton 
                        title= "Cart"
                        customfunc={() => handleClick("cart")}
                        color="blue"
                        icon={<FiShoppingCart />}
                    />
                    {/* chat button */}
                    <NavButton 
                        title= "Chat" 
                        customfunc={() => handleClick("chat")}
                        dotColor= "#03c9d7"
                        color="blue"
                        icon={<BsChatLeft />}
                    />
                    {/* notification button */}
                    <NavButton 
                        title= "Notifications" 
                        customfunc={() => handleClick("notification")}
                        dotColor= "#03c9d7"
                        color="blue"
                        icon={<RiNotification3Line />}
                    />
                    {/* user profile */}
                    <TooltipComponent content="Profile" position="BottomCenter">
                        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick("userProfile")}
                        >
                            <img
                            src={avatar}
                            className="rounded-full w-8 h-8"
                            alt="avatar"/>
                            <p>
                                <span className="text-gray-400 text-14"> Hi,</span> &nbsp;
                                <span className="text-gray-400 font-bold ml-0.5 text-14"> Micheal </span>
                            </p>
                            {/* dropdown button */}
                            <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                        </div>
                    </TooltipComponent>
                    {isClicked.cart && <Cart />}
                    {isClicked.chat && <Chat />}
                    {isClicked.notification && <Notification />}
                    {isClicked.userProfile && <UserProfile />}
                </div>
            </div>

        </>
}

export default NavBar
