import React from 'react';

const Image = props => {
    return (
        <div className="imgContainer">
            <a href=""><img src={props.img} alt="" className="imgWork" /></a>
            <div className="overlay">
                <div className="text">
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Image;