import React, {Component} from "react";
import './Images.css';
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
                <div className="imgContainer">
                    <a href=""><img src={work1} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Project Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
        
                <div className="imgContainer">
                    <a href=""><img src={work2} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Project Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
        
                <div className="imgContainer">
                    <a href=""><img src={work3} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Project Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
        
                <div className="imgContainer">
                    <a href=""><img src={work4} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Prject Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
        
                <div className="imgContainer">
                    <a href=""><img src={work5} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Prject Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
            
                <div className="imgContainer">
                    <a href=""><img src={work6} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Prject Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
            
                <div className="imgContainer">
                    <a href=""><img src={work7} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Prject Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
            
                <div className="imgContainer">
                    <a href=""><img src={work8} alt="" className="imgWork" /></a>
                    <div className="overlay">
                        <div className="text">
                            <h5>Prject Name</h5>
                            <p>Website Design</p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}