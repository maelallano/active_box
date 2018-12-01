import React, {Component} from "react";
import './Footer.css';

export default class Footer extends Component {

    render() {
		return (
            <footer>
                <div className="footerContainer">
                    <div className="infoFlex">
                        <div className="location">
                            <h5 className="locationTitle">location</h5>
                            <p className="locationP">3481 Melrose Place<br />Beverly Hills, CA 90210</p>
                        </div>

                        <div className="share">
                            <h5 className="shareTitle">share with love</h5>
                            <a href="#"><i className="shareIcons fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="shareIcons fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="shareIcons fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="shareIcons fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>

                        <div className="about">
                            <h5 className="aboutTitle">about activebox</h5>
                            <p className="aboutP">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        </div>
                    </div>
                </div>

                <div className="footerContainerPlus">
                    <div className="containerCopyright">
                        <p className="copyright">Copyright © 2017 ActiveBox. All Rights Reserved
                        <br />Made with <i className="heart fa fa-heart" aria-hidden="true"></i>
                        <span className="whiteText"> by </span>
                        <a href="#" className="kamal">Maël ALLANO</a></p>
                    </div>
                </div>
            </footer>
		);
	}
}