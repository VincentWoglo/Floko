import "../Styles/Css/Speaker.css"
import DukeStump_Speaker from "../Assets/DukeStump_Speaker.png";
import JelaniMemory_Speaker from "../Assets/JelaniMemory_Speaker.png";
import ChristaCouture_Speaker from "../Assets/ChristaCouture_Speaker.png";
import SlideArrowtLeft from "../Assets/SlideArrowtLeft.png";
import SlideArrowRIght from "../Assets/SlideArrowRIght.png";

const SpeakersSection = ()=>{
    return(
        <section className="SpeakersSection">
            <div className="Container">
                <div className="MeetTheSpeakersTitleWrapper">
                    <h2 className="MeetTheSpeakersTitle">
                        Meet the talented Speakers
                    </h2>
                    <p className="MeetTheSpeakersDescription">
                        The convention is the main event of the year for professionals in the world 
                        of design and architecture.
                    </p>
                </div>
                <div className="SpeakersSlideShowWrapper">
                    <div className="SlideArrowWrapper">
                        <div className="LeftSlideArrow">
                            <img src={ SlideArrowtLeft } alt="" className="LeftSlideArrowImage" />
                        </div>
                        <div className="RightSlideArrow">
                            <img src={ SlideArrowRIght } alt="" className="RightSlideArrowImage" />
                        </div>
                    </div>
                    <div className="SpeakersCardsWrapper">
                        <div className="SpeakerOne">
                            <img src={ DukeStump_Speaker } alt="" className="SpeakImage" />
                            <div className="Overlay"></div>
                            <div className="SpeakerDescription">
                                <h2 className="SpeakerName">
                                    Duke Stump
                                </h2>
                                <p className="SpeakerPosition">
                                    Game-Changing CMO & Founder, Nonfire with Soul
                                </p>
                            </div>
                        </div>

                        <div className="SpeakerTwo">
                            <img src={ JelaniMemory_Speaker } alt="" className="SpeakImage" />
                            <div className="Overlay"></div>
                            <div className="SpeakerDescription">
                                <h2 className="SpeakerName">
                                Jelani Memory
                                </h2>
                                <p className="SpeakerPosition">
                                    Global Authority on Privacy & Security. Founder, Global Privacy by Design.
                                </p>
                            </div>
                        </div>

                        <div className="SpeakerThree">
                            <img src={ ChristaCouture_Speaker } alt="" className="SpeakImage" />
                            <div className="Overlay"></div>
                            <div className="SpeakerDescription">
                                <h2 className="SpeakerName">
                                    Christa Couture
                                </h2>
                                <p className="SpeakerPosition">
                                    Advocate, Builder, Changemaker, Youngest Developer in the USA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { SpeakersSection }