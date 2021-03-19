import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
} from 'recharts';

export default class ReChart_Bar extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Cs: props.Cs,
            Cr: props.Cr,
            Ctc: props.Ctc,
            Cnc: props.Cnc,
            Ci: props.Ci
        }
    }

    componentDidMount() {
        let tempArr = [];
        for (let i = 0; i < this.state.Ctc.length; i++) {
            let tempData = {
                name: 'Line ' + (i + 1),
                "Complexity_By_Type": this.state.Ctc[i],
                "Complexity_By_Nested": this.state.Cnc[i],
                "Complexity_By_Size": this.state.Cs[i],
                "Complexity_By_Recursion": this.state.Cr[i],
                "Complexity_By_Inheritence": this.state.Ci[i]
            }
            tempArr.push(tempData);
        }

        // Add data
        this.setState({
            data: tempArr
        });
    }

    render() {
        const CtcMax = Math.max(...this.state.Ctc);
        const CncMax = Math.max(...this.state.Cnc);
        const CsMax = Math.max(...this.state.Cs);
        const CrMax = Math.max(...this.state.Cr);
        const CiMax = Math.max(...this.state.Ci);

        const maxAll = Math.max(CtcMax, CncMax, CsMax,CrMax, CiMax);

        return (
            <div>
                <div>
                    <LineChart
                        width={1200}
                        height={400}
                        data={this.state.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis type="number" domain={[0, maxAll]} />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            layout="vetical"
                            align="right"
                            wrapperStyle={{
                                paddingLeft: "10px"
                            }} />
                        <Line type="monotone" dataKey="Complexity_By_Type" stroke="#8884d8" height="10" />
                        <Line type="monotone" dataKey="Complexity_By_Nested" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Complexity_By_Size" stroke="#f56c42" />
                        <Line type="monotone" dataKey="Complexity_By_Recursion" stroke="#A6503E" />
                        <Line type="monotone" dataKey="Complexity_By_Inheritence" stroke="#6cf542" />
                    </LineChart>
                </div>
            </div>



        );
    }
}
