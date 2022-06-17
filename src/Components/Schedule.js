import "../Styles/Css/Schedule.css";


const ScheduleSection = ()=>{
    return(
        <section className="ScheduleSection">
            <div className="Container">
                <div className="SchdeuleTitleWrapper">
                    <h2 className="ScheduleTitle">
                        Schedule
                    </h2>
                    <p className="ScheduleDescription">
                        A representation of the event planning of the Design Conference
                    </p>
                    <button className="DownloadScheduleBtn">
                        Download Schedule
                    </button>
                </div>
                <div className="SchedulesWrapper">
                    <div className="ScheduleRoadmapTitle">
                        <div className="DayOne">
                            <strong className="DayNumber">Day One</strong> <br />
                            <strong className="Day">05</strong> April, Tuesday
                        </div>
                        <div className="DayTwo">
                            <strong className="DayNumber">Day Second</strong> <br />
                            <strong className="Day">05</strong> April, Tuesday
                        </div>
                        <div className="DayThree">
                            <strong className="DayNumber">Day Third</strong> <br />
                            <strong className="Day">05</strong> April, Tuesday
                        </div>
                    </div>
                    <div className="ScheduleTimeline">
                        <div className="RegistrationAndCoffee">
                            <p className="Time">8.00 AM - 9.00 AM</p>
                            <div className="Circle"></div>
                            <div className="AppointmentInfo">
                                <h1 className="AppointmentInfoTitle">
                                    Registration & Coffee
                                </h1>
                                <p className="AppointmentInfoDescription">
                                    Register your personal data in customer service and take coffee 
                                    before entering the room
                                </p>
                            </div>
                        </div>
                        <div className="PlanAndConductUserResearch">
                            <p className="Time">8.00 AM - 9.00 AM</p>
                            <div className="Circle"></div>
                            <div className="AppointmentInfo">
                                <h1 className="AppointmentInfoTitle">
                                    Plan & Conduct User Research
                                </h1>
                                <p className="AppointmentInfoDescription">
                                    Many early researchers are challanged by aspect of the design and 
                                    implementation of research studies as well the efective dissemunation.
                                </p>
                            </div>
                        </div>
                        <div className="QAndAForSpeaker">
                            <p className="Time">8.00 AM - 9.00 AM</p>
                            <div className="Circle"></div>
                            <div className="AppointmentInfo">
                                <h1 className="AppointmentInfoTitle">
                                    Q&A For Speaker
                                </h1>
                                <p className="AppointmentInfoDescription">
                                    Register your personal data in customer service and take food before 
                                    entering the room
                                </p>
                            </div>
                        </div>
                        <div className="LaunchBreak">
                            <p className="Time">8.00 AM - 9.00 AM</p>
                            <div className="Circle"></div>
                            <div className="AppointmentInfo">
                                <h1 className="AppointmentInfoTitle">
                                    Launch Break
                                </h1>
                                <p className="AppointmentInfoDescription">
                                    
                                </p>
                            </div>
                        </div>
                        <div className="ResearchForTheRightThing">
                            <p className="Time">8.00 AM - 9.00 AM</p>
                            <div className="Circle"></div>
                            <div className="AppointmentInfo">
                                <h1 className="AppointmentInfoTitle">
                                    Research For The Right Thing
                                </h1>
                                <p className="AppointmentInfoDescription">
                                    Research encompasses a cariety of investigative methods used to add 
                                    context and insight to the design process
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export { ScheduleSection }