import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip} from "@syncfusion/ej2-react-charts"
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/data/dummy"


function Stacked({width, height}) {
    return (
        <ChartComponent
        width={width}
        height={height}
        id="stacked chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
        </ChartComponent>
    )
}

export default Stacked
