import React, {Component} from "react";
import './Team.css';
import Person from '../Person/Person';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import team4 from '../../img/team-4.jpg';

export default class Team extends Component {

    render() {
		return (
            <div className="teamContainer" id="team">
                <div className="team">
                    <Person img={team1} name={"Ruth Wood"} role={"FOUNDER, CEO"} />
                    <Person img={team2} name={"Timothy Reed"} role={"CO-FOUNDER, DEVELOPER"} />
                    <Person img={team3} name={"Victoria Valdez"} role={"UI DESIGNER"} />
                    <Person img={team4} name={"Beverly Little"} role={"DATA SCIENTIST"} />
                </div>
            </div>
		);
	}
}