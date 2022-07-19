import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const ButtonMailto = ({children, type, onClick, buttonStyle, buttonSize, mailto, label}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : 
    SIZES[0];

    return (
        <Link to='/services' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
                
            }}
            type={type}
            >
                {label}
                {children}
            </button>
        </Link>
    )
};

export default ButtonMailto