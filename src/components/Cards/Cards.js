import React, {useEffect} from "react";
import "./Cards.css"

// import images
import cardImage1 from "../images/cardImage1.jpeg"
import cardImage2 from "../images/cardImage2.jpeg"
import cardImage3 from "../images/cardImage3.jpeg"

// import icons
import { AiOutlineSwapRight } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css"

const Cards = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []) 

    return (
        <div className="cards">
            <div className="cardContainer container grid">
                <div data-aos="fade-up" date-aos-duration="2000" className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage1} alt="image1" />
                    </div>
                    <h4 className="textDiv">Balloon Flight</h4>
                </div>
                <div data-aos="fade-up" date-aos-duration="4000" className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage2} alt="image2" />
                    </div>
                    <h4 className="textDiv">Beach Travels</h4>
                </div>
                <div data-aos="fade-up" date-aos-duration="6000" className="singleCard">
                    <div className="imgDiv">
                        <img src={cardImage3} alt="image3" />
                    </div>
                    <h4 className="textDiv">Mountain Tours</h4>
                </div>
            </div>

            <div className="spanText flex">
                Other Tours<AiOutlineSwapRight className="icon"/>
            </div>
        </div>
    )
}

export default Cards;