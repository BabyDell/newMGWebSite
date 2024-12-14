import AnimatedHeader from "@/components/AnimatedHeader";
import AgentListings from "@/components/Listings";


export default async function Home() {

  return (
    <main className="">
      <AnimatedHeader imageSrc="/img/mglistingsbg.jpg" altText="house" headerText="Listings" />
      <AgentListings />
    </main>
  );
}

