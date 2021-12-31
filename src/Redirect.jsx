import React from 'react';
import './Redirect.scss';

export default function Redirect() {
    return (
        <div className="redirect">
            <div className="message-container">
                <img className="circle" src="./universal/circle.png" alt="rotate" />
                <div className="message">
                    Rotate Device
                </div>
            </div>
        </div>
    )
}
