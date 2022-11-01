import React, { Component } from 'react';
import axios from 'axios';


import './Upload.css'


const FormData = require('form-data');


class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio_video: null,
            text: ""
        };
    }

    onAVFileChange = (e) => {
        let video = document.getElementById('media_player');
        video.style.display = "block";
        let reader = new FileReader();
    
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener('load', function(){
            video.src = reader.result;
        });

        this.setState({
            audio_video: e.target.files[0]
        })
    };

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append("audio_video", this.state.audio_video, this.state.audio_video.name);
        form_data.append("text", this.state.text);

        let url = "http://localhost:8000/upload/";

        axios.post(url, form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(res => {
            document.getElementById("submit").value="Saved Successfully";
        }).catch(err => {
            document.getElementById("submit").value="ERROR!";
        });
    };


    render() {
        return(
            <div>
                <form onSubmit={ this.onSubmit } id="main_form">
                    <div className='Input_Div'>
                        <div className='AV_Div'>
                            <label>Choose a Video/Audio file: &nbsp; </label>
                            <input type="file" accept=".mp4,.mkv,.mov,.avi,.wav,.mp3,.aac,.flac" onChange={ this.onAVFileChange } required/> <br/><br/><br/>
                            <video width={"100%"} height={"85%"} controls id="media_player" style={{ display: "none" }}/>
                        </div>
                        <div className='TXT_Div'>
                            <textarea rows={1024} cols={1024} placeholder="Insert Text Here!" onChange={ this.onTextChange } id="txt" form="main_form" required/>
                        </div>
                    </div>
                    <div className='SUB_Div'>
                        <input type="submit" value="Upload" id="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Upload;
