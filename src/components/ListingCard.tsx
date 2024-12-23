import Image from "next/image";

interface StandardFields {
  ListPrice: number;
  BedsTotal: number;
  BathsTotal: number;
  PublicRemarks: string;
}

interface PrimaryPhoto {
  Uri300: string;
}

interface Listing {
  Id: string;
  StandardFields: StandardFields;
  PrimaryPhoto?: PrimaryPhoto;
}

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        {listing.PrimaryPhoto && (
          <Image src={listing.PrimaryPhoto.Uri300} alt={listing.StandardFields.PublicRemarks} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-white">${listing.StandardFields.ListPrice.toLocaleString()}</h3>
          <p className="text-gray-400 text-base mb-2">{listing.StandardFields.BedsTotal} beds, {listing.StandardFields.BathsTotal} baths</p>
          <p className="text-gray-200 text-sm">{listing.StandardFields.PublicRemarks}</p>
        </div>
      </div>
    )
  }
  
  