import React, { useState } from "react";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import dice from "./assets/images/icon-dice.svg";
import axios from "axios";

function AdviceCard() {

    const [advice, setAdvice] = useState({id: 117,
                                        advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action." });

    const getAdvice = async() => {
        const response = await axios.get("https://api.adviceslip.com/advice");
        const advice = await response.data.slip;
        console.log(response);
        setAdvice(advice);
    }

    return (
        <div className="card">
            <p>ADVICE #{advice.id}</p>
            <h2>“{advice.advice}”</h2>
            <img 
                src={dividerDesktop} 
                className="divider-desktop" 
                alt="divider">
            </img>
            <img 
                src={dividerMobile} 
                className="divider-mobile" 
                alt="divider">
            </img>
            <div 
                className="dice" 
                onClick={getAdvice} 
                aria-label="Click on dice to generate advice">
                <img 
                    src={dice}
                    alt="dice">
                </img>
            </div>
        </div>
    )
}

export default AdviceCard