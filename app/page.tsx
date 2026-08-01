import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhyWedBridge from "@/components/WhyWedBridge";
import MarketOpportunity from "@/components/MarketOpportunity";
import Milestones from "@/components/Milestones";
import BusinessModel from "@/components/BusinessModel";
import GoToMarket from "@/components/GoToMarket";
import MarketSize from "@/components/MarketSize";
import FounderStory from "@/components/FounderStory";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <WhyWedBridge />
      <MarketOpportunity />
      <Milestones />
      <BusinessModel />
      <GoToMarket />
      <MarketSize />
      <FounderStory />
      <Connect />
    </main>
  );
}
