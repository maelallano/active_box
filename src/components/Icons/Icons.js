import React, {Component} from "react";
import './Icons.css';
import tools from '../../img/tools.png';
import computer from '../../img/computer.png';
import bulb from '../../img/bulb.png';
import logo1 from '../../img/logo1.png';
import briefcase from '../../img/briefcase.png';
import cloud from '../../img/cloud.png';

export default class Icons extends Component {

    render() {
		return (
            <div className="iconContainer" id="features">
                <div className="logoImg">
                    <div className="img">
                        <img className="iconscale" src={tools} alt="" />
                        <h5 className="imgTitle">easily customised</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>

                    <div className="img">
                        <img className="iconscale" src={computer} alt="" />
                        <h5 className="imgTitle">responsive ready</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>


                    <div className="img">
                        <img className="iconscale" src={bulb} alt="" />
                        <h5 className="imgTitle">mondern design</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>


                    <div className="img">
                        <img className="iconscale" src={logo1} alt="" />
                        <h5 className="imgTitle">clean code</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>

                    <div className="img">
                        <img className="iconscale" src={briefcase} alt="" />
                        <h5 className="imgTitle">ready to ship</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>

                    <div className="img">
                        <img className="iconscale" src={cloud} alt="" />
                        <h5 className="imgTitle">download for free</h5>
                        <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
                    </div>
                </div>
            </div>
		);
	}
}