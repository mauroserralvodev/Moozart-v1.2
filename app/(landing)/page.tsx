import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  return ( 
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <div className="pb-2">
      <LandingFooter />
      </div>
    </div>
   );
}

export default LandingPage;