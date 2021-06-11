import React from 'react'
import './ButtonComponent.css'
import PropTypes from "prop-types";


const ButtonComponent = (props) => {
    const className = `button ${props.type}`


    return (
        <div>
            <button className={className} onClick={(e) => props.handleClick(e)} style = {props.style}>
                 {props.icon} {props.label && props.label}
                {props.loader}
            </button>
        </div>
    )
}
ButtonComponent.propTypes = {
    style: PropTypes.object,
    handleClick: PropTypes.func,
  };


export default ButtonComponent
