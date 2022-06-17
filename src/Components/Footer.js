import VectorLogo from "../Assets/floko_vector_logo.png";
import TextLogo from "../Assets/floko_text_logo.png";
import "../Styles/Css/Footer.css"

const FooterSection = ()=>{
    return (
        <section className="FooterSection">
            <div className="Container">
                <div className="Wrapper">
                    <div className="FooterLogoWrapper">
                        <img src={ VectorLogo } alt="" className="VectorLogo" />
                        <img src={ TextLogo } alt="" className="TextLogo" />
                    </div>
                    <div className="FooterSiteMapWrapper">
                        <div className="FooterNavigateWrapper">
                            <h2 className="SectionTitle">
                                Navigate
                            </h2>
                            <ul className="UnorderedSitemap">
                                <li className="Home">Home</li>
                                <li className="Speakers">Speakers</li>
                                <li className="About">About</li>
                                <li className="HellYesMoments">Hell Yes! Moments</li>
                                <li className="Contact">Contact</li>
                                <li className="Legal">Legal</li>
                            </ul>
                        </div>
                        <div className="FooterSpeakerWrapper">
                            <h2 className="SectionTitle">
                                Speaker
                            </h2>
                            <ul className="UnorderedSitemap">
                                <li className="AnanyaCaro">Ananya Caro</li>
                                <li className="ChristaCouture">Christa Couture</li>
                                <li className="DukeJelani">Duke Jelani</li>
                                <li className="DrArwinAdam">Dr. Arwin Adam</li>
                                <li className="PawrenceJulie">Pawrence Julie</li>
                                <li className="AndersonAdom">Anderson Adom</li>
                            </ul>
                        </div>
                        <div className="FooterNewsletterWrapper">
                            <h2 className="SectionTitle">
                                Newsletter
                            </h2>
                            <p className="FooterNewsletterDescription">
                            Sign up to be first to receive the latest stories inspiring us, case 
                            studies, and industry news.
                            </p>
                            <div className="FooterNewsletterInputs">
                                <input type="text" className="YourName" placeholder="Your name" /> <br />
                                <input type="text" className="EmailAddress" placeholder="Email Address" /> <br />
                                <input type="submit" className="NewsletterSubscribeBtn" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { FooterSection }