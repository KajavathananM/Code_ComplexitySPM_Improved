import React, { Component } from 'react';
import '../../Assets/css/TableDisplay.css'

class TableDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: props.content,
            Cs: props.Cs,
            Cr: props.Cr,
            Ctc: props.Ctc,
            Cnc: props.Cnc,
            Ci: props.Ci
        }
    }

    fillRow() {
        console.log(this.state.Cnc)
        var lineArr = this.state.content.split(/(?:\r\n|\r|\n)/g);
        var i = 0;
        return lineArr.map(line => {
            i++;
            return (
                <tr>
                    <th scope="row">{i}</th>
                    <td>{line}</td>
                    <td>{this.state.Cs[i-1]}</td>
                    <td>{this.state.Cr[i-1]}</td>
                    <td>{this.state.Ctc[i-1]}</td>
                    <td>{this.state.Cnc[i-1]}</td>
                    <td>{this.state.Ci[i-1]}</td>
                    <td>{this.state.Ctc[i-1]+this.state.Cnc[i-1]+this.state.Ci[i-1]}</td>
                    <td>{ ((this.state.Ctc[i-1]+this.state.Cnc[i-1]+this.state.Ci[i-1])*this.state.Cs[i-1])+this.state.Cr[i-1]}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div class="container mt-4">

                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="pt-3 pb-4 text-center font-bold font-up text-primary">Complexity Analysis Summary</h2>
                            </div>
                        </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th class="col-md-6">Code Segment</th>
                                    <th class="col-md-6">Cs</th>
                                    <th class="col-md-6">Cr</th>
                                    <th class="col-md-2">Ctc</th>
                                    <th class="col-md-2">Cnc</th>
                                    <th class="col-md-2">Ci</th>
                                    <th class="col-md-2">Tw</th>
                                    <th class="col-md-2">Cps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.fillRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableDisplay;