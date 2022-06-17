import Ellipse from "../Assets/Ellipse 2.png";
import Union from "../Assets/Union.png";
import "../Styles/Css/Hero.css"


const HeroSection = ()=>{
    return(
        <section className="HeroSection">
            <div className="Container">
                <div className="DecorationWrapper">
                    <img src={ Ellipse } alt="" className="EllipseLeftImage" />
                    <img src={ Union } alt="" className="UnionLeftImage" />
                    <img src={ Ellipse } alt="" className="EllipseRightImage" />
                    <img src={ Union } alt="" className="UnionRightImage" />
                </div>
                <div className="OurDesignEventWrapper">
                    <p className="OurDesignEventSubHeader">
                        OCTOBER 18-22, 2021 / REMOTE DESIGN WEEK
                    </p>
                    <h1 className="OurDesignEventHeader">
                        Our Design Event is coming up!
                    </h1>
                    <div className="OurDesignEventCallToActionWrapper">
                        <button className="BookASeatBtn">Book A Seat</button>
                        <button className="LearnMoreBtn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export { HeroSection }