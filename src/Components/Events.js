import EventImage from "../Assets/EventImage.png";
import "../Styles/Css/Event.css";

const EventsSection = ()=>{
    return (
        <section className="EventsSection">
            <div className="Container">
                <div className="EventDescriptionWrapper">
                    <div className="Wrapper">
                        <h2 className="EventTitle">
                            Events You'll Remember
                        </h2>
                        <h3 className="EventSubTitle">
                            We are a turnkey event agency in New York.
                        </h3>
                        <p className="EvenetDescriptionOne">
                            EventiX is a leading event management company in the United States. 
                            We hold the highest quality events pushing the boundaries of the industry standards.
                        </p>
                        <p className="EvenetDescriptionTwo">
                        We are passionate about creating integrated experiences that bring cohesive connection between brands and 
                        targeted audience. Our team of experienced and talented event managers strive to deliver stellar results.
                        </p>
                    </div>
                </div>
                <div className="EventImageWrapper">
                    <div className="Wrapper">
                        <img src={ EventImage } alt="" className="EventImage" />
                        <div className="EventDateWrapper">
                            <div className="Date">
                                <strong className="Bold">14</strong> <br />
                                Days
                            </div>
                            <div className="Hours">
                                <strong className="Bold">12</strong> <br />
                                Hours
                            </div>
                            <div className="Minutes">
                                <strong className="Bold">29</strong> <br />
                                Minutes
                            </div>
                            <div className="Seconds">
                                <strong className="Bold">59</strong> <br />
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { EventsSection }