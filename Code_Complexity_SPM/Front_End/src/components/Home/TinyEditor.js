import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TinyEditor extends Component {

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
      }

    render() {

        return (
            <div className="container" style={{ marginTop: '50px' }}>

                <Editor
                    
                    apiKey="z6kgjxy5fm9stncaajjw4dosfureruvf5lac2bnk54lt6j20"
                    //initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                        height: "500px",
                        selector: 'textarea',
                        plugins: 'link image code | code | link | codesample | advcode | pagebreak | save',
                        toolbar: 'undo redo | codesample | image | link | code | pagebreak | save',
                        save_onsavecallback: function () { console.log('Saved'); },
                        // init_instance_callback: function (editor) {
                        //     editor.on('GetContent', function (e) {
                        //         e.content.innerHTML += 'My custom content!';
                        //         console.log(e.content)
                        //     });
                        // },
                        codesample_languages: [
                            { text: 'Java', value: 'java' },
                            { text: 'C', value: 'c' },
                            { text: 'C#', value: 'csharp' },
                            { text: 'C++', value: 'cpp' }
                        ],
                        codesample_content_css: "http://ourcodeworld.com/material/css/prism.css",
                        
                    }}
                    onSaveContent={this.handleEditorChange}
                    

                />

            </div>

        );
    }
}

export default TinyEditor;
