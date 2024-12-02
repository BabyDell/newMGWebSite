'use client'
import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  apiKey: string | undefined;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          zoom: 9,
          center: { lat: 33.71199107404604, lng: -116.29384353836734 },
          mapTypeId: "roadmap",
        });

        const coords = [
            { lat: 33.85377994429054, lng: -116.5572582391826 },
            { lat: 33.80264805467796, lng: -116.54862101398787 },
            { lat: 33.78704981430919, lng: -116.48567043878494 },
            { lat: 33.770968654449604, lng: -116.4513075094975 },
            { lat: 33.74311950815651, lng: -116.42329739256446 },
            { lat: 33.71790343019368, lng: -116.3987524438326 },
            { lat: 33.71021705701468, lng: -116.30750298696384 },
            { lat: 33.645335900078344, lng: -116.32136366432347 },
            { lat: 33.649182073827355, lng: -116.30663669462886 },
            { lat: 33.359036901703554, lng: -116.03086697978442 },
            { lat: 33.24851998545051, lng: -115.9596906352981 },
            { lat: 33.29604089814985, lng: -115.91366727715652 }, 
            { lat: 33.536610525997716, lng: -115.9092972933654 },
            { lat: 33.74383985834368, lng: -116.18044678430972 },
            { lat: 33.97643560580964, lng: -116.50241875538637 },
            { lat: 33.97643560580964, lng: -116.5465996644702 },
          ];

        const polygon = new google.maps.Polygon({
          paths: coords,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });

        polygon.setMap(map);
      }
    });
  }, [apiKey]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;

