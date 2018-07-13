import React from 'react';
import './Header.css';
import houserLogo from '../../images/houser_logo.png';

export default function Header(props) {
    return (
        <div className='container'>
            <div className='label'>
            <img src={houserLogo} alt="Logo for Houser"/>
            <h1 className="houserTitle">{props.title}</h1>
            </div>
        </div>
    )
}