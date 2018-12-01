import React, {Component} from "react";
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgMenu: 0,
        };
    }

    toggleBgMenu = () => {
        this.setState({
            bgMenu: !this.state.bgMenu,
        })
    }

    closeBgMenu = () => {
        this.setState({
            bgMenu: 0,
        })
    }

    render() {
        const bgMenu = this.state.bgMenu ? "nav-list closeBurger" : "nav-list";

		return (
            <header className="header">
                <div className="logo">
                    <a href="#" className="logo-title"><span className="grey-text">Active</span>Box</a>
                    <div className="burger burgerPosition" onClick={this.toggleBgMenu}>
                        <span className="burger-menu"></span>
                    </div>
            
                    <div className={bgMenu}>
                        <ul>
                            <a href="#features" className="listItem" onClick={this.closeBgMenu}><li className="list">features</li></a>
                            <a href="#works" className="listItem" onClick={this.closeBgMenu}><li className="list">works</li></a>
                            <a href="#team" className="listItem" onClick={this.closeBgMenu}><li className="list">our team</li></a>
                            <a href="#testimonial" className="listItem" onClick={this.closeBgMenu}><li className="list">testimonials</li></a>
                            <a href="#download" className="listItem" onClick={this.closeBgMenu}><li className="list">download</li></a>
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