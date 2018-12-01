import React, {Component} from "react";
import './Header.css';

export default class Header extends Component {

    render() {
		return (
            <header className="header">
                <div className="logo">
                    <a href="#" className="logo-title"><span className="grey-text">Active</span>Box</a>
                    <div className="burger burgerPosition">
                        <span className="burger-menu"></span>
                    </div>
            
                    <div className="nav-list">
                        <ul>
                            <a href="" className="listItem"><li className="list">features</li></a>
                            <a href="" className="listItem"><li className="list">works</li></a>
                            <a href="" className="listItem"><li className="list">our team</li></a>
                            <a href="" className="listItem"><li className="list">testimonials</li></a>
                            <a href="" className="listItem"><li className="list">download</li></a>
                        </ul>
                    </div>
                </div>

                <div className="title-container">
                    <h1 className="head-title">your favorite one page multi purpose template</h1>
                    <p className="title-paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna vel scelerisque nisl consectetur et.</p>
                    <div className="btn-background">
                        <a className="btn-red" href="">find out more</a>
                    </div>
                </div>
            </header>
		);
	}
}