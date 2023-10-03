import React, {useEffect} from "react";
import "./Tours.css"

// import images
import tourImage1 from "../images/image2.jpeg"
import tourImage2 from "../images/image3.jpg"

// import icons
import { AiFillStar } from "react-icons/ai"

import Aos from "aos";
import "aos/dist/aos.css"

const Tours = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []) 

    return (
        <div className="tours container section">
            <div className="secContainer">
                <span className="secTitle">
                    Hot Tours
                </span>

                <div className="tourContainer">
                    <div data-aos="fade-up" date-aos-duration="2000" className="singleTour grid">
                        <div className="imgDiv">
                            <img src={tourImage1} alt="tourImage1" />
                        </div>
                        <div data-aos="fade-up" date-aos-duration="3000" className="tourInfo">
                            <span className="tourTitle">
                                Spain, Benidorm
                            </span>

                            <div className="stars_review flex">
                                <div className="stars">
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                </div>

                                <small className="custReview">
                                    2Customer Review
                                </small>
                            </div>

                            <p>
                                Spain, a country on Europe's Iberian Peninsula, includes 17
                                automomous regions with diverse geography and cultures. Capital
                                city Madrid is home to Royal palace and Prado museum, housing
                                works by European masters
                            </p>
                            <button className="btn">Buy This Tour</button>
                        </div>

                        <span className="price">
                            $790
                        </span>
                    </div>

                    <div data-aos="fade-up" date-aos-duration="3000" className="singleTour grid">
                        <div className="imgDiv">
                            <img src={tourImage2} alt="tourImage1" />
                        </div>
                        <div data-aos="fade-up" date-aos-duration="3500" className="tourInfo">
                            <span className="tourTitle">
                                Mauritius Island, Indian
                            </span>

                            <div className="stars_review flex">
                                <div className="stars">
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                </div>

                                <small className="custReview">
                                    12Customer Review
                                </small>
                            </div>

                            <p>
                                Spain, a country on Europe's Iberian Peninsula, includes 17
                                automomous regions with diverse geography and cultures. Capital
                                city Madrid is home to Royal palace and Prado museum, housing
                                works by European masters
                            </p>
                            <button className="btn">Buy This Tour</button>
                        </div>

                        <span className="price">
                            $790
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tours;