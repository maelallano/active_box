import React, {Component} from "react";
import './Team.css';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import team4 from '../../img/team-4.jpg';

export default class Team extends Component {

    render() {
		return (
            <div className="teamContainer" id="team">
                <div className="team">
                    <div>
                        <img src={team1} alt="" className="teamImg" />
                        <h4 className="teamTitle">Ruth Wood</h4>
                        <h5 className="teamRole">FOUNDER, CEO</h5>
                        <p className="teamP">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <div className="teamIcons">
                            <a href="#"><i className="tIcons fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-google-plus" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div>
                        <img src={team2} alt="" className="teamImg" />
                        <h4 className="teamTitle">Timothy Reed</h4>
                        <h5 className="teamRole">CO-FOUNDER, DEVELOPER</h5>
                        <p className="teamP">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <div className="teamIcons">
                            <a href="#"><i className="tIcons fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-google-plus" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div>
                        <img src={team3} alt="" className="teamImg" />
                        <h4 className="teamTitle">Victoria Valdez</h4>
                        <h5 className="teamRole">UI DESIGNER</h5>
                        <p className="teamP">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <div className="teamIcons">
                            <a href="#"><i className="tIcons fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-google-plus" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div>
                        <img src={team4} alt="" className="teamImg" />
                        <h4 className="teamTitle">Beverly Little</h4>
                            <h5 className="teamRole">DATA SCIENTIST</h5>
                        <p className="teamP">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna.
                            Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                        <div className="teamIcons">
                            <a href="#"><i className="tIcons fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-google-plus" aria-hidden="true"></i></a>
                            <a href="#"><i className="tIcons fa fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}