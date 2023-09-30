import {BsCurrencyDollar} from "react-icons/bs"
import {GoDotFill} from "react-icons/go"
import {Stacked, Pie, Button, SparkLine} from "../components"
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/data/dummy"
import {UseContext} from "../contexts/ContextProvider"

function Ecommerce() {
    // const {} = UseContext()
    return (
        <div className="mt-24 overflow-y-scroll">
            <div className="md:flex">
                {/* Earnings */}
                <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-auto p-8 pt-9 ml-6 mt-8 bg-hero-pattern bg-no-repeat bg-cover bg-center flex flex-col items-center ">
                    <div className = "flex justify-center items-center gap-5">
                        <p className="font-bold text-gray-400"> Earnings </p>
                        <p className="text-xl font-semibold"> $63,443.92 </p>
                    </div>
                    <div className="mt-6 sm:">
                        <Button 
                        color = "white"
                        bgColor = "#03c9d7"
                        text = "Download"
                        borderRadius = "10px"
                        size="md"
                        />
                    </div>
                </div>

                {/* customers sales products refunds */}
                <div className="flex md:m-3 mt-6 flex-wrap justify-center gap-4 items-center">
                    {earningData.map(item => {
                        return (
                        <div 
                        key={item.title}
                        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                        md:w-45 sm:w-auto md:p-8 p-5 pt-9 rounded-2xl md:m-2 flex flex-col items-center justify-center
                        "
                        >
                            <button type = "button" style={{
                                color: item.iconColor, backgroundColor: item.iconBg
                            }}
                            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                            >
                                    {item.icon}
                            </button>
                            <blockquote className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                                <p className="text-lg text-gray-400 font-semibold pt-3 mt-1">{item.title}
                                </p>
                            </blockquote>
                        </div>
                        )
                    })}
                </div>
            </div>
                {/* revenue updates , expenses, bugets */}
                <div className="flex gap-10 flex-wrap justify-center mt-3">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        {/* revenue update flex-box */}
                        <div className="flex justify-between gap-5">
                            <blockquote className="md:font-semibold md:text-xl"> Revenue updates </blockquote>
                            <div className="flex items-center gap-4">
                                <p className="flex items-center md:gap-2  text-gray-600 hover:drop-shadow-xl">
                                    <span> 
                                        <GoDotFill /> 
                                    </span>
                                    <span> Expense </span>
                                </p>
                                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                    <span> 
                                        <GoDotFill /> 
                                    </span>
                                    <span> Budget </span>
                                </p>
                            </div>
                        </div>
                        {/* expense amount,  budget amount and sparkline chart */}
                        <div className="mt-10 flex gap-10 flex-wrap justify-center">
                            <div className="border-r-1 border-color m-4 pr-10">
                                <div>
                                    <blockquote>
                                        <span className="md:text-3xl font-semibold">
                                            $93,438
                                        </span>
                                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 mb-3 text-xs"
                                        >
                                            23 %
                                        </span>
                                        <p className="text-gray-500 mt-1">
                                            Budget
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="mt-8">
                                    <blockquote>
                                        <span className="md:text-3xl font-semibold">
                                            $48,000
                                        </span>
                                        <p className="text-gray-500 mt-1">
                                            Expense
                                        </p>
                                    </blockquote>
                                </div>
                                <div className="mt-5 h-60 w-80">
                                    <SparkLine
                                    currentColor = "blue"
                                    id = "line-sparkline"
                                    type = "Line"
                                    height = "50px"
                                    width = "250px"
                                    data = {SparklineAreaData}
                                    color = "blue"
                                    />
                                </div>
                                <div className="mt-10">
                                    <Button 
                                    color = "white"
                                    bgColor="#03c9d7"
                                    text="Download Report"
                                    borderRadius= "10px"
                                    />
                                </div>
                            </div>
                            <div>
                                <Stacked
                                width = "320px"
                                height = "360px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Ecommerce
