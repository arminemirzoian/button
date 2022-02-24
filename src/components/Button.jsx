import React, {useRef, useState} from 'react';
import './Button.css';
import {BOX, SIZES, STYLES} from "../helpers/constants";


function ButtonReact({children, type, buttonStyle, buttonSize, boxSize, disabled}) {

    const Icon = useRef();
    const [isLoading, setIsLoading] = useState(false);

    function fetchData(e) {
        e.preventDefault()
        setIsLoading(true);
        Icon.current.style.display = "none";

        //Faking API call here
        setTimeout(() => {
            Icon.current.style.display = "block";
            setIsLoading(false);
        }, 2000);
    }

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkBoxSize = BOX.includes(boxSize) ? boxSize : BOX[0];
    return (
        <div className="btn-border">
            <div className={`${checkBoxSize}`}>
                <svg className="icon" ref={Icon} width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.5 12V14H9V16H11V14H12C12.663 14 13.2989 13.7366 13.7678 13.2678C14.2366 12.7989 14.5 12.163 14.5 11.5C14.5 10.837 14.2366 10.2011 13.7678 9.73223C13.2989 9.26339 12.663 9 12 9H8C7.86739 9 7.74022 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5C7.5 8.36739 7.55268 8.24022 7.64645 8.14645C7.74022 8.05268 7.86739 8 8 8H13.5V6H11V4H9V6H8C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20108 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11H12C12.1326 11 12.2598 11.0527 12.3536 11.1464C12.4473 11.2402 12.5 11.3674 12.5 11.5C12.5 11.6326 12.4473 11.7598 12.3536 11.8536C12.2598 11.9473 12.1326 12 12 12H6.5Z"
                        fill="white"/>
                </svg>
                <button
                    onClick={fetchData}
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    /* onClick={onClick}*/
                    type={type}
                    disabled={disabled}>  {isLoading && (
                    <i className="fa fa-refresh fa-spin loader" aria-hidden="true"
                    />
                )}
                    {isLoading && children}
                    {!isLoading && "BUTTON"}
                </button>
            </div>
        </div>
    );
}

export default ButtonReact;