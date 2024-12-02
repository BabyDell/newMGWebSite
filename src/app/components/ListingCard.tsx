export default function ListingCard({ listing }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg">
        {listing.PrimaryPhoto && (
          <img src={listing.PrimaryPhoto.Uri300} alt={listing.StandardFields.PublicRemarks} className="w-full h-48 object-cover" />
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">${listing.StandardFields.ListPrice.toLocaleString()}</h3>
          <p className="text-gray-700 text-base mb-2">{listing.StandardFields.BedsTotal} beds, {listing.StandardFields.BathsTotal} baths</p>
          <p className="text-gray-600 text-sm">{listing.StandardFields.PublicRemarks}</p>
        </div>
      </div>
    )
  }
  
  