import React, { Component } from 'react';
import axios from 'axios';


class View extends Component {
    constructor() {
        super();

        this.state = {
            msg: [],
        };
    }

    componentDidMount() {
        let url = "http://localhost:8000/view";

        axios.get(url).then(res => {
            this.setState({
                msg: JSON.parse(res.data.msg)
            });
        }).catch(err => {
            document.getElementById("wrng").value="ERROR!";
        });
    }

    render() {
        return(
            <div>
                <br/>
                <label id="wrng">&nbsp; Please head over to the <a href="/">Upload</a> page to store data.</label>
                <ul>
                {
                    this.state.msg.map((item) => {
                        return <li> Date: { item.pk } &nbsp; &nbsp; Video/Audio: <a href={ item.fields.audio_video } > Link </a> &nbsp; &nbsp; Text: { item.fields.text }</li>
                    })
                }
                </ul>
            </div>
        );
    }
}

export default View;
