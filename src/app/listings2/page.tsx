'use client'

import { useState } from 'react';
import AnimatedHeader from "../components/AnimatedHeader";
import { PropertyList } from "../components/PropertyList";
import { Property } from "../types/property";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const initialProperties: Property[] = [
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


type SortOrder = 'default' | 'Ascending' | 'Descending';

export default function Listings() {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [sortOrder, setSortOrder] = useState<SortOrder>('default');

  const handleSort = (order: SortOrder) => {
    setSortOrder(order);
    let sortedProperties = [...properties];
    if (order === 'Ascending') {
      sortedProperties.sort((a, b) => a.price - b.price);
    } else if (order === 'Descending') {
      sortedProperties.sort((a, b) => b.price - a.price);
    } else {
      sortedProperties = initialProperties;
    }
    setProperties(sortedProperties);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <AnimatedHeader
        imageSrc="/img/mgCoffee.jpg"
        altText="Listings"
        headerText="Listings"
      />
      <div className="w-full max-w-7xl px-24 mx-auto text-white py-10">
        <div className="float-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border-white bg-black text-white text-xl font-Montserrat h-10 w-72" variant="outline">
                {sortOrder === 'default' ? 'Sort' : `Sort: ${sortOrder}`} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black">
              <DropdownMenuItem className=" text-white text-xl font-Montserrat" onClick={() => handleSort('default')}>
                Sort
              </DropdownMenuItem>
              <DropdownMenuItem className=" text-white text-xl font-Montserrat" onClick={() => handleSort('Ascending')}>
                Price Ascending 
              </DropdownMenuItem>
              <DropdownMenuItem className=" text-white text-xl font-Montserrat" onClick={() => handleSort('Descending')}>
                Price Descending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <PropertyList properties={properties} />
    </div>
  );
}