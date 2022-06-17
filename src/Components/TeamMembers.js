import AndersonAdam_HeadShot from "../Assets/AndersonAdam_HeadShot.png";
import EdwardsReyes_HeadShot from "../Assets/EdwardsReyes_HeadShot.png";
import RogersParker_HeadShot from "../Assets/RogersParker_HeadShot.png";

const TeamMembers = ()=>{
    return(
        <section className="TeamMembers">
        <div className="Container">
            <div className="TeamMemberOne">
                <img src={ AndersonAdam_HeadShot } alt="" className="TeamMemberImage" />
                <div className="TeamMemberDescription">
                    <h1 className="TeamMemberName">
                        Anderson <br />
                        Adam
                    </h1>
                    <p className="TeamMemberPosition">
                        App Designer
                    </p>
                </div>
            </div>
            <div className="TeamMemberTwo">
                <img src={ EdwardsReyes_HeadShot } alt="" className="TeamMemberImage" />
                <div className="TeamMemberDescription">
                    <h1 className="TeamMemberName">
                        Edwards <br />
                        Reyes
                    </h1>
                    <p className="TeamMemberPosition">
                        Web Designer
                    </p>
                </div>
            </div>
            <div className="TeamMemberThree">
                <img src={ RogersParker_HeadShot } alt="" className="TeamMemberImage" />
                <div className="TeamMemberDescription">
                    <h1 className="TeamMemberName">
                    Rogers <br />
                    Parker
                    </h1>
                    <p className="TeamMemberPosition">
                        Product Designer
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}

export { TeamMembers }