import React, {useRef, useState} from 'react';
import './Button.css';
import {BOX, SIZES, STYLES} from "../helpers/constants";

function ButtonReact({children, type, buttonStyle, buttonSize, boxSize, disabled, icon}) {

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
                     xmlns="http://www.w3.org/2000/svg"> {!isLoading && icon}
                </svg>
                <button
                    onClick={fetchData}
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    type={type}
                    disabled={disabled}>
                    {isLoading && (
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