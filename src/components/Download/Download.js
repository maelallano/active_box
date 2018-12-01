import React, {Component} from "react";
import './Download.css';

export default class Download extends Component {

    render() {
		return (
            <div className="downContainer" id="download">
                <div className="downloadTitle">
                    <h3>Are You Ready to Start? Download Now For Free!</h3>
                </div>

                <div className="downloadSubTitle">
                    <h4>FUSCE DAPIBUS, TELLUS AC CURSUS COMMODO</h4>
                </div>

                <div className="downloadBtnBox">
                    <a className="downloatBtn" href="#">download for free</a>
                </div>
            </div>
		);
	}
}