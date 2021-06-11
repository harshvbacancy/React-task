import React, {useState} from 'react'
import './ButtonComponent.css'
import PropTypes from "prop-types";


const ButtonComponent = (props) => {
    const [spinner,setSpinner] = useState(false)
    const handleClick = () => {
        setSpinner(true);

        //Faking API call here
        setTimeout(() => {
            if(props.handleClick())props.handleClick()
          setSpinner(false);
        }, 1000);
      };
    const className = `button ${props.type}`
    return (
        <div>
            <button className={className} onClick={() => handleClick()} style = {props.style}>
                 {props.icon} {props.label && props.label}
                {spinner && props.loader}
            </button>
        </div>
    )
}
ButtonComponent.propTypes = {
    style: PropTypes.object,
    handleClick: PropTypes.func,
  };


export default ButtonComponent
