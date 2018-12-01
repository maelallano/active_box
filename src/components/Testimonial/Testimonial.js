import React, {Component} from "react";
import './Testimonial.css';
import testimonialImg from '../../img/testimonial-1.jpg';

export default class Testimonial extends Component {

    render() {
		return (
            <div className="boxContainer" id="testimonial">
                <img className="boxImg" src={testimonialImg} alt="" />
                <div className="box">
                    <h3 className="testimonialTitle">"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Aenean eu leo quam..."</h3>
                    <p className="testimonialP">SUSAN SIMS, INTERACTION DESIGNER AT XYZ</p>
                </div>
            </div>
		);
	}
}