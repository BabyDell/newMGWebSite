import AgentInfo from "../components/AgentInfo";
import AgentListings from "../components/Listings";


export default async function Home() {

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Real Estate Website</h1>
      <AgentListings />
    </main>
  );
}

