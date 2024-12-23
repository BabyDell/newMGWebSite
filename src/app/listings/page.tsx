import AnimatedHeader from "@/components/AnimatedHeader";
import AgentListings from "@/components/Listings";
import { Property } from "../types/property";
import { PropertyList } from "@/components/PropertyList";


export default async function Home() {

    const Properties: Property[] = [
          {
            id: "1",
            image: "/img/mgHome.jpg",
            price: 350000,
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
          },
          {
            id: "2",
            image: "/img/mgHome2.jpg",
            price: 450000,
            address: "456 Oak Ave",
            city: "Somewhere",
            state: "NY",
            zipCode: "67890",
          },
          {
            id: "3",
            image: "/img/mgHome.jpg",
            price: 550000,
            address: "789 Pine Rd",
            city: "Elsewhere",
            state: "TX",
            zipCode: "54321",
          },
          {
            id: "4",
            image: "/img/mgHome.jpg",
            price: 350000,
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
          },
          {
            id: "5",
            image: "/img/mgHome2.jpg",
            price: 450000,
            address: "456 Oak Ave",
            city: "Somewhere",
            state: "NY",
            zipCode: "67890",
          },
          {
            id: "6",
            image: "/img/mgHome.jpg",
            price: 550000,
            address: "789 Pine Rd",
            city: "Elsewhere",
            state: "TX",
            zipCode: "54321",
          },
          {
            id: "7",
            image: "/img/mgHome.jpg",
            price: 350000,
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
          },
          {
            id: "8",
            image: "/img/mgHome2.jpg",
            price: 450000,
            address: "456 Oak Ave",
            city: "Somewhere",
            state: "NY",
            zipCode: "67890",
          },
          {
            id: "9",
            image: "/img/mgHome.jpg",
            price: 550000,
            address: "789 Pine Rd",
            city: "Elsewhere",
            state: "TX",
            zipCode: "54321",
          },
          {
            id: "10",
            image: "/img/mgHome.jpg",
            price: 350000,
            address: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345",
          },
          {
            id: "11",
            image: "/img/mgHome2.jpg",
            price: 450000,
            address: "456 Oak Ave",
            city: "Somewhere",
            state: "NY",
            zipCode: "67890",
          },
          {
            id: "12",
            image: "/img/mgHome.jpg",
            price: 550000,
            address: "789 Pine Rd",
            city: "Elsewhere",
            state: "TX",
            zipCode: "54321",
          },
        ];
        
  return (
    <main className="">
      <AnimatedHeader imageSrc="/img/mglistingsbg.jpg" altText="house" headerText="Listings" />
      <AgentListings />
      <PropertyList properties={Properties} />
    </main>
  );
}

