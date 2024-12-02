import Image from "next/image";
import { Property } from "../types/property";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-black overflow-hidden shadow-lg ">
        
      <div className="relative h-[500px]">
        <div className="group">
          <Image
            src={property.image}
            alt={property.address}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Property
          </button>
        </div>
        <div className="absolute bottom-2 left-2  px-2 py-1 rounded">
          <span className="font-bold text-lg text-white text-shadow tracking-wider font-thin">
            ${property.price.toLocaleString()}
          </span>
        </div>
        
        </div>
        <div className="bg-black text-white p-4">
          <div className="font-bold text-lg mb-3 leading-tight font-Playfair_Display">
            {property.address}
          </div>
          <div className="text-sm leading-relaxed break-words font-serif">
            {property.city}, {property.state} {property.zipCode}
          </div>
      </div>
    </div>
  );
}
