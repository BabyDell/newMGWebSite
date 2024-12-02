import { Property } from '../types/property';
import { PropertyCard } from './PropertyCard';

export function PropertyList({ properties }: { properties: Property[] }) {
  return (
    <div className="w-full h-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

