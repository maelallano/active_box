import React from 'react';

const Person = props => {
    return (
        <div>
            <img src={props.img} alt="" className="teamImg" />
            <h4 className="teamTitle">{props.name}</h4>
            <h5 className="teamRole">{props.role}</h5>
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
    )
}

export default Person;