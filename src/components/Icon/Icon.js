import React from "react";

const Icon = props => {
    return (
        <div className="img">
            <img className="iconscale" src={props.img} alt="" />
            <h5 className="imgTitle">{props.title}</h5>
            <p className="imgP">Cras justo odio, dapibus ac facilisis in, egestas eget<span className="block"> quam. Nullam quis risus eget urna mollis ornare</span><span className="block"> vel eu leo. Donec ullamcorper nulla non metus</span> auctor fringilla.</p>
        </div>
    )
};

export default Icon;