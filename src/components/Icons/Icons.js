import React, {Component} from "react";
import './Icons.css';
import Icon from '../Icon/Icon';
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
                    <Icon img={tools} title="easily customised" />
                    <Icon img={computer} title="responsive ready" />
                    <Icon img={bulb} title="modern design" />
                    <Icon img={logo1} title="clean code" />
                    <Icon img={briefcase} title="ready to ship" />
                    <Icon img={cloud} title="download for free" />
                </div>
            </div>
		);
	}
}