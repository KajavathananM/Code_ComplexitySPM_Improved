import React, { Component } from 'react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import Highlight from 'react-highlight'

import 'highlight.js/styles/github.css'
import TableDisplay from './TableDisplay';

import Pie_Dragable from '../Data_Visualization/Pie_Dragable';
import ReChart_Bar from '../Data_Visualization/ReChart_Bar';


class FilePondUploader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
      content: '',
      showVisualData: false,
      showFormatedData: false,
      showAnalysisData: false,
      formatedContent: '',
      Cs: [],
      Cr:[],
      Ctc: [],
      Cnc: [],
      Ci: []

    };

    this.handleFileChoosen = this.handleFileChoosen.bind(this);
    this.showContent = this.showContent.bind(this);
    this.showFormatedContent = this.showFormatedContent.bind(this);
    this.ShowVisual = this.ShowVisual.bind(this);
    this.showAnalysis = this.showAnalysis.bind(this);
    this.changeFormatted = this.changeFormatted.bind(this);
    this.changeVisual = this.changeVisual.bind(this);
    this.changeAnalysis = this.changeAnalysis.bind(this);
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  handlePondFile(error, file) {
    if (error) {
      console.log('Oh no');
      return;
    }
    const fileId = JSON.parse(file.serverId)
    this.setState({
      formatedContent: fileId.content,
      Cs: fileId.cs,
      Cr : fileId.cr,
      Ctc: fileId.ctc,
      Cnc: fileId.cnc,
      Ci: fileId.ci
    })
    // console.log('File added', fileId.cs, fileId.ctc, fileId.cnc, fileId.ci);


  }

  handleFileChoosen(file) {
    this.fileReader = new FileReader();

    this.fileReader.onload = (e) => {
      const formattedText = this.fileReader.result;

      console.log(formattedText)

      this.setState({
        content: formattedText,
        show: true
      })
    }
    this.fileReader.readAsText(file)


  }


  showContent() {
    if (this.state.content != '') {
      return (
        <div>
          <h4 style={{ marginLeft: '350px' }}>Input File Content</h4>
          <hr className="col mb-3" />
          <Highlight language="java">
            {this.state.content}
          </Highlight>

          <div className="row" style={{marginLeft:'60px'}}>
            <div className="col md-4">
              <input
                type="button"
                value="Formatted Content"
                color="secondary"
                className="btn btn-success"
                onClick={this.changeFormatted} />

            </div>
            <div className="col md-4">
              <input
                type="button"
                value="Complexity Analysis"
                className="btn btn-danger"
                onClick={this.changeAnalysis} />

            </div>
            <div className="col md-4">
              <input
                type="button"
                value="Data Visualization"
                className="btn btn-warning"
                onClick={this.changeVisual} />
            </div>
          </div>
        </div>
      )
    }
  }

  changeVisual() {
    this.setState({ showVisualData: !this.state.showVisualData })
  }

  changeFormatted() {
    this.setState({ showFormatedData: !this.state.showFormatedData })
  }

  changeAnalysis() {
    this.setState({ showAnalysisData: !this.state.showAnalysisData })
  }

  ShowVisual() {
    if (this.state.formatedContent != '' && this.state.showVisualData) {
      return (
        <div style={{ marginLeft: '-100px' }}>
          {/* <Reversed_BarChart 
          Cs={this.state.Cs}
          Ctc={this.state.Ctc}
          Cnc={this.state.Cnc}
          Ci={this.state.Ci}
        /> */}

          <Pie_Dragable
            Cs={this.state.Cs}
            Cr={this.state.Cr}
            Ctc={this.state.Ctc}
            Cnc={this.state.Cnc}
            Ci={this.state.Ci}
          />

          <ReChart_Bar
            Cs={this.state.Cs}
            Cr={this.state.Cr}
            Ctc={this.state.Ctc}
            Cnc={this.state.Cnc}
            Ci={this.state.Ci}
          />
        </div>)
    }
  }

  showFormatedContent() {
    if (this.state.formatedContent != '' && this.state.showFormatedData) {
      return (
        <div>
          <h4 style={{ color: 'Orange', marginLeft: '350px', marginTop: '50px' }}>Formated File Content</h4><br />

          <hr className="col mb-3" />
          <Highlight language="java">
            {this.state.formatedContent}
          </Highlight>
        </div>
      )
    }
  }

  showAnalysis() {
    if (this.state.formatedContent != '' && this.state.showAnalysisData) {
      return (
        <div>

          <TableDisplay
            content={this.state.formatedContent}
            Cs={this.state.Cs}
            Cr={this.state.Cr} 
            Ctc={this.state.Ctc}
            Cnc={this.state.Cnc}
            Ci={this.state.Ci}/>

        </div>
      )
    }

  }

  clearContent() {
    this.setState({
      content: "",
      formatedContent: "",
      files: []
    })
  }

  render() {


    return (
      <div className="App">

        <FilePond
          name={"file"}
          files={this.state.files}
          server="http://localhost:4000/admin/file/uploadfile"
          onprocessfile={this.handlePondFile.bind(this)}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            }, () => {
              if (this.state.files.length > 0)
                this.handleFileChoosen(fileItems[0].file)
            });


          }}
          onremovefile={this.clearContent.bind(this)}
        />

        {this.showContent()}

        {this.showFormatedContent()}

        {this.ShowVisual()}

        {this.showAnalysis()}
      </div>
    );
  }
}

export default FilePondUploader;