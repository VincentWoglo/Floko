import { ContainerWrapper } from "../Components/Wrappers/Container";
import { HeaderWrapper } from "../Components/Wrappers/Header";
import { NavBar } from "../Components/NavBar";
import { HeroSection } from "../Components/Hero";
import { TeamMembers } from "../Components/TeamMembers";
import { MainWrapper } from "../Components/Wrappers/Main";
import { EventsSection } from "../Components/Events";
import { SpeakersSection } from "../Components/Speakers";
import { ScheduleSection } from "../Components/Schedule";
import { PricingTicketsSection } from "../Components/PricingTickets";
import { TestimonySection } from "../Components/Testimony";
import { FooterSection } from "../Components/Footer";


const Home = ()=>{
  return (
    <ContainerWrapper>
      <HeaderWrapper>
        <NavBar />
        <HeroSection />
        <TeamMembers />
      </HeaderWrapper>

      <MainWrapper>
        <EventsSection />
        <SpeakersSection />
        <ScheduleSection />
        <PricingTicketsSection />
      </MainWrapper>
      <TestimonySection />
      <FooterSection />
    </ContainerWrapper>
  );
}

export default Home;
