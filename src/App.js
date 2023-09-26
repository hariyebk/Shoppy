import React, {useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {FiSettings} from "react-icons/fi"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {NavBar, Footer, Sidebar, ThemeSettings, } from "./components"
import {Ecommerce, Employees, Orders, Customers,  Kanban, Calender, ColorPicker, Editor, Stacked, Pyramid, Area, Pie, Line, Financial, ColorMapping, Bar } from "./pages"
import { UseContext } from "./contexts/ContextProvider"
import "./App.css"

function App() {
    const {activeMenu, setActiveMenu, screenSize, setScreenSize} = UseContext()
    return (
        <div>
            <BrowserRouter>
                <div className="flex dark:bg-main-dark-bg">
                    {/* Settings Button */}
                    <div className="fixed right-4 bottom-4" style={{zIndex: "1000"}}>
                        <TooltipComponent content= "settings" position="Top">
                            <button type="button" 
                            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white"
                            style={{background: "blue", borderRadius: "50%"}}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* Sidebar */}
                    {activeMenu && 
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg
                    bg-white">
                        <Sidebar />
                    </div>}
                    {/* Main page*/}
                    <div className={
                        activeMenu ?
                        " dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full"
                        :
                        'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }> 
                        {/* Navbar */}
                        <div className="fixed md:static dark:bg-main-dark-bg bg-main-bg navbar w-full">
                            <NavBar />
                        </div>
                    </div>
                        <div>
                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element = {<Ecommerce/>}/>
                                <Route path="/ecommerce" element = {<Ecommerce/>}/>
                                {/* pages */}
                                <Route path="/orders" element = {<Orders/>}/>
                                <Route path="/customers" element = {<Customers/>}/>
                                <Route path="/employees" element = {<Employees/>}/>
                                {/* Apps */}
                                <Route path="/kanban" element = {<Kanban/>}/>
                                <Route path="/editor" element = {<Editor/>}/>
                                <Route path="/calender" element = {<Calender/>}/>
                                <Route path="/color-picker" element = {<ColorPicker/>}/>
                                {/* Charts */}
                                <Route path="/line" element = {<Line/>}/>
                                <Route path="/area" element = {<Area/>}/>
                                <Route path="/bar" element = {<Bar/>}/>
                                <Route path="/pie" element = {<Pie/>}/>
                                <Route path="/financial" element = {<Financial/>}/>
                                <Route path="/color-mapping" element = {<ColorMapping/>}/>
                                <Route path="/pyramid" element = {<Pyramid/>}/>
                                <Route path="/stacked" element = {<Stacked/>}/>
                            </Routes>
                        </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
