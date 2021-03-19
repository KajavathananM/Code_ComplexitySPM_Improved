import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

class Reversed_BarChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Cs: props.Cs,
            Cr:props.Cr,
            Ctc: props.Ctc,
            Cnc: props.Cnc,
            Ci: props.Ci
        }
    }

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

        let tempArr =[]
        for(let i=0;i<this.state.Ctc.length;i++){
            let lineData ={
                "line": i+1,
                "Complexity_By_Type": this.state.Ctc[i],
                "Complexity_By_Nested": this.state.Cnc[i],
                "Complexity_By_Size": this.state.Cs[i],
                "Complexity_By_Recursion": this.state.Cr[i],
                "Complexity_By_Inheritence": this.state.Ci[i]
            }
            tempArr.push(lineData);
        }

        // Add data
        chart.data = tempArr;

        // Create category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "line";
        categoryAxis.renderer.opposite = true;

        // Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = true;
        valueAxis.title.text = "Complexity Value";
        valueAxis.renderer.minLabelPosition = 0.01;

        // Create series
        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Complexity_By_Type";
        series1.dataFields.categoryX = "line";
        series1.name = "Complexity By Type";
        series1.strokeWidth = 3;
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "Complexity Value by {name} in {categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "Complexity_By_Nested";
        series2.dataFields.categoryX = "line";
        series2.name = 'Complexity By Nested';
        series2.strokeWidth = 3;
        series2.bullets.push(new am4charts.CircleBullet());
        series2.tooltipText = "Complexity Value by {name} in {categoryX}: {valueY}";
        series2.legendSettings.valueText = "{valueY}";

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "Complexity_By_Size";
        series3.dataFields.categoryX = "line";
        series3.name = 'Complexity By Size';
        series3.strokeWidth = 3;
        series3.bullets.push(new am4charts.CircleBullet());
        series3.tooltipText = "Complexity Value by {name} in {categoryX}: {valueY}";
        series3.legendSettings.valueText = "{valueY}";

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = "Complexity_By_Inheritence";
        series4.dataFields.categoryX = "line";
        series4.name = 'Complexity By Inheritence';
        series4.strokeWidth = 3;
        series4.bullets.push(new am4charts.CircleBullet());
        series4.tooltipText = "Complexity Value by {name} in {categoryX}: {valueY}";
        series4.legendSettings.valueText = "{valueY}";

        let series5 = chart.series.push(new am4charts.LineSeries());
        series5.dataFields.valueY = "Complexity_By_Recursion";
        series5.dataFields.categoryX = "line";
        series5.name = 'Complexity By Recursion';
        series5.strokeWidth = 3;
        series5.bullets.push(new am4charts.CircleBullet());
        series5.tooltipText = "Complexity Value by {name} in {categoryX}: {valueY}";
        series5.legendSettings.valueText = "{valueY}";

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";

        // Add legend
        chart.legend = new am4charts.Legend();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        );
    }


}

export default Reversed_BarChart;