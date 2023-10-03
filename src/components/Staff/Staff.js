import React, {useEffect} from "react";
import "./Staff.css"

// import images
import user4 from "../images/user4.jpeg"
import user5 from "../images/user5.jpeg"
import user6 from "../images/user6.jpeg"

import Aos from "aos";
import "aos/dist/aos.css"

const Staff = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="staff container section">
            <div className="secContainer">
                <span className="secTitle">
                    Different People - One Mission
                </span>

                <div className="staffContainer grid">
                    <div data-aos="fade-up" date-aos-duration="2000" className="singleStaff">
                        <div className="imgDiv">
                            <img src={user4} alt="user4" />
                        </div>

                        <span className="name">
                            Nicle Charmaine
                        </span>

                        <span className="jopTitle">
                            CEO Wander
                        </span>

                        <span className="contact">
                            +344 990 7758 90
                        </span>
                    </div>

                    <div data-aos="fade-up" date-aos-duration="2000" className="singleStaff">
                        <div className="imgDiv">
                            <img src={user5} alt="user5" />
                        </div>

                        <span className="name">
                           Mel Gupta
                        </span>

                        <span className="jopTitle">
                            Softtware Eng
                        </span>

                        <span className="contact">
                            +344 367 7758 90
                        </span>
                    </div>

                    <div data-aos="fade-up" date-aos-duration="2000" className="singleStaff">
                        <div className="imgDiv">
                            <img src={user6} alt="user6" />
                        </div>

                        <span className="name">
                            Cirilo Lobo
                        </span>

                        <span className="jopTitle">
                            IT Specialst
                        </span>

                        <span className="contact">
                            +344 990 7758 88
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff;