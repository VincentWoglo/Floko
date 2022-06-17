import "../Styles/Css/PricingTickets.css";
import WhiteCheckCircle from "../Assets/WhiteCheckCircle.png";
import RedCheckCircle from "../Assets/RedCheckCircle.png";
import GreenCheckCircle from "../Assets/GreenCheckCircle.png";

const PricingTicketsSection = ()=>{
    return (
        <section className="PricingTicketsSection">
            <div className="Container">
                <h1 className="PricingTicketsTitle">
                    Pricing Tickets
                </h1>
                <div className="PricingOptionsWrapper">
                    <div className="PricingCardOne">
                        <div className="PricingCardTitleWrapper">
                            <h2 className="PricingCardTitle">
                                Standard
                            </h2>
                            <p className="PricingPerMember">
                                $20/mo per member
                            </p>
                        </div>
                        <div className="CardFeaturesWrapper">
                            <div className="CardFeature">
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        One day pas access all lecture
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                     <p className="Feature">
                                            Lunch and snack
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Free T-Shirt
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Meet Event Speaker
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Front Seat
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ WhiteCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Certificate
                                    </p>
                                </div>
                                <button className="CardOneBtn">
                                    Get Your Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="PricingCardTwo">
                        <div className="PricingCardTitleWrapper RedPricingCardTitleWrapper">
                            <h2 className="PricingCardTitle">
                                Standard
                            </h2>
                            <p className="PricingPerMember">
                                $20/mo per member
                            </p>
                        </div>
                        <div className="CardFeaturesWrapper">
                            <div className="CardFeature">
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        One day pas access all lecture
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                     <p className="Feature">
                                            Lunch and snack
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Free T-Shirt
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Meet Event Speaker
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Front Seat
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ RedCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Certificate
                                    </p>
                                </div>
                                <button className="CardOneBtn">
                                    Get Your Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="PricingCardThree">
                        <div className="PricingCardTitleWrapper GreenPricingCardTitleWrapper">
                            <h2 className="PricingCardTitle">
                                Standard
                            </h2>
                            <p className="PricingPerMember">
                                $20/mo per member
                            </p>
                        </div>
                        <div className="CardFeaturesWrapper">
                            <div className="CardFeature">
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        One day pas access all lecture
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                     <p className="Feature">
                                            Lunch and snack
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Free T-Shirt
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Meet Event Speaker
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Front Seat
                                    </p>
                                </div>
                                <div className="FeatureWrapper">
                                    <img src={ GreenCheckCircle } alt="" className="FeatureIcon" />
                                    <p className="Feature">
                                        Certificate
                                    </p>
                                </div>
                                <button className="CardOneBtn BlueCardBtn">
                                    Get Your Ticket
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export { PricingTicketsSection }