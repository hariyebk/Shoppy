import {NavLink, Link} from "react-router-dom"
import {SiShopware} from "react-icons/si"
import {MdOutlineCancel} from "react-icons/md"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {links} from "../data/data/dummy"
import { UseContext } from "../contexts/ContextProvider"
import { useEffect } from "react"

function Sidebar() {
    const {activeMenu, setActiveMenu, screenSize} = UseContext()
    function handleCloseSidebar(){
        // close the sidebar in small screens when the close button is clicked.
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }
    const active = "flex items-center gap-5 pl-4 pb-2.5 rounded-lg text-md m-2"
    const inactive = "flex items-center gap-5 pl-4 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
            {activeMenu &&
            <>
                <div className="flex justify-between items-center">
                    {/* Brand logo */}
                    <Link to= "/" onClick={() => {}}
                    className="flex items-center gap-3 ml-4 mt-6 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                    >
                        <SiShopware/> <span> Shoopy </span>
                    </Link>

                    {/* Close Menu button */}
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type = "button" onClick={handleCloseSidebar} className="text-xl rounded-fullitems-center mr-4 p-3 mt-4 block md:hidden">
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                {/* Navigation */}
                <div className="mt-10">
                    {links.map(item => {
                        return(
                        <div key={item.title}>
                            {/* Link catagory Title */}
                            <p className="text-gray-400 m-3 mt-4 uppercase cursor-pointer">
                                {item.title}
                            </p>
                            {/* child links */}
                            {item.links.map(link => {
                                return(
                                    <NavLink
                                    to={`/${link.name}`}
                                    key={link.name}
                                    onClick={handleCloseSidebar}
                                    className={({isActive}) => isActive ? active : inactive}
                                    >
                                        {link.icon}
                                        <span className="capitalize">
                                            {link.name}
                                        </span>
                                    </NavLink>
                                )
                            })}
                        </div>
                        )
                    })}
                </div>
            </>
            }
        </div>
    )
}

export default Sidebar
