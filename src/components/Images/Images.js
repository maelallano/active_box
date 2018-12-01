import React, {Component} from "react";
import './Images.css';
import Image from '../Image/Image';
import work1 from '../../img/work-1.jpg';
import work2 from '../../img/work-2.jpg';
import work3 from '../../img/work-3.jpg';
import work4 from '../../img/work-4.jpg';
import work5 from '../../img/work-5.jpg';
import work6 from '../../img/work-6.jpg';
import work7 from '../../img/work-7.jpg';
import work8 from '../../img/work-8.jpg';

export default class Images extends Component {

    render() {
		return (
            <div className="imgFlex" id="works">
                <Image img={work1} title={"Project Name"} text={"Website Design"} />
                <Image img={work2} title={"Project Name"} text={"Website Design"} />
                <Image img={work3} title={"Project Name"} text={"Website Design"} />
                <Image img={work4} title={"Project Name"} text={"Website Design"} />
                <Image img={work5} title={"Project Name"} text={"Website Design"} />
                <Image img={work6} title={"Project Name"} text={"Website Design"} />
                <Image img={work7} title={"Project Name"} text={"Website Design"} />
                <Image img={work8} title={"Project Name"} text={"Website Design"} />
            </div>
		);
	}
}