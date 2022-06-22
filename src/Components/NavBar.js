import "../Styles/Css/NavBar.css"
import VectorLogo from "../Assets/floko_vector_logo.png"
import TextLogo from "../Assets/floko_text_logo.png"

const NavBar = ()=>{
    return(
        <section className="NavigationSection">
            <nav className="Navigation">
                <div className="Container">
                    <div className="LogoWrapper">
                        <img src={ VectorLogo } alt="" className="VectorLogo" />
                        <img src={ TextLogo } alt="" className="TextLogo" />
                    </div>
                    <div className="MenuListWrapper">
                        <ul className="MenuListItems">
                            <li className="Home">Home</li>
                            <li className="About">About</li>
                            <li className="Schedule">Schedule</li>
                            <li className="Team">Team</li>
                            <li className="Contacts">Contacts</li>
                        </ul>
                    </div>
                    <div className="LoginRegistrationWrapper">
                        <button className="RegisterNow">Register Now</button>
                        
                    </div>
                    <div className="HamburgerMenu">
                            <hr className="Line_1" />
                            <hr className="Line_2" />
                            <hr className="Line_3" />
                    </div>
                </div>
            </nav>
        </section>
    )
}
export { NavBar }