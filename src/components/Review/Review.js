import React, {useEffect} from "react";
import "./Review.css"

// import images
import user1 from "../images/user1.jpeg"
import user2 from "../images/user2.jpeg"
import user3 from "../images/user3.jpeg"

import Aos from "aos";
import "aos/dist/aos.css"

const Review = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []) 

    return (
        <div className="review section">
            <div className="secContainer">
                <span className="secTitle">
                    What People Say
                </span>

                <div className="reviewcontainer container grid">
                    <div data-aos="fade-up" date-aos-duration="3000" className="singleReview">
                        <div className="imgDiv">
                            <img src={user1} alt="user1" />
                        </div>

                        <p>
                            lorem ipsum dolor sit amet consectrtur, adipisicing elit. vel
                            asperiores qoud nostrum exercitationem laborum a!
                        </p>

                        <div className="name">
                            Nicole Webb
                        </div>
                    </div>

                    <div data-aos="fade-up" date-aos-duration="3500" className="singleReview">
                        <div className="imgDiv">
                            <img src={user2} alt="user2" />
                        </div>

                        <p>
                            lorem ipsum dolor sit amet consectrtur, adipisicing elit. vel
                            asperiores qoud nostrum exercitationem laborum a!
                        </p>

                        <div className="name">
                            Lidney Josline
                        </div>
                    </div>

                    <div data-aos="fade-up" date-aos-duration="4000" className="singleReview">
                        <div className="imgDiv">
                            <img src={user3} alt="user3" />
                        </div>

                        <p>
                            lorem ipsum dolor sit amet consectrtur, adipisicing elit. vel
                            asperiores qoud nostrum exercitationem laborum a!
                        </p>

                        <div className="name">
                            Rupert Loreot
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;