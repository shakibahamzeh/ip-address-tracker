import React, { useEffect, useState } from 'react';
import './style.css';
import Input from './components/input/input';
import { ArrowRight2 } from 'iconsax-react';
import Card from './components/card/card';
import { useQuery } from '@tanstack/react-query';
import IPAdress from './services/IP.services';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from "/images/icon-location.svg"
const MapUpdater = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position, 15); // Set view with higher zoom level
    }, [position, map]);
    return null;
};

// Component to fit the map's view to the marker position
const BoundsUpdater = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (Array.isArray(position) && position.length === 2) {
            const [lat, lng] = position;
            if (typeof lat === 'number' && typeof lng === 'number') {
                const bounds = L.latLngBounds([position]);
                map.fitBounds(bounds, { maxZoom: 15 }); // Fit the bounds with a max zoom level
            } else {
                console.error("Invalid position coordinates: ", position);
            }
        } else {
            console.error("Position is not a valid array: ", position);
        }
    }, [position, map]);

    return null;
};


const IPAddressTracker = () => {
    const initialIP = '8.8.8.8';
    const initialPosition = [37.386, -122.084]; // Coordinates for Google's HQ

    const [ip, setIp] = useState();
    const [position, setPosition] = useState(initialPosition);
    const [inputIp, setInputIp] = useState()
    const { data, isLoading, refetch, error } = useQuery({
        queryKey: ['getIPAddress', ip],
        queryFn: async () => await new IPAdress().getIPAddress({
            params: {
                apiKey: "at_jpgMrpxZLR4SUfPwZhOnCOhywsdZM",
                ipAddress: ip
            }
        }),
        // Enable query only if IP is not empty
    });
console.log(data);

    // Create a custom Leaflet icon using the imported images
    const icon = L.icon({
        iconUrl: locationIcon,
        iconSize: [46, 56],
        iconAnchor: [23, 56],
        popupAnchor: [0, -56],
      });
    

    // Default to a neutral position if no data is available
    const defaultPosition = [51.505, -0.09]; // Central London for testing
    // const position = data ? [data.data.location.lat, data.data.location.lng] : defaultPosition;
    useEffect(() => {
        if (data && data.data.location.lat && data.data.location.lng) {
            setPosition([data.data.location.lat, data.data.location.lng]);
        }
    }, [data]);

    const handleUpdateIp = () => {
        setIp(inputIp); // Update IP state from input field
        refetch(); // Refetch data based on the new IP
    };
    return (
        <>
            <header>
                <h1>IP Address Tracker</h1>
                <div className="form-control">
                    <Input
                        type="text"
                        placeholder="Search for any IP address or domain"
                        value={inputIp}
                        onChange={(e) => setInputIp(e.target.value)} // Update IP state on input change
                    />
                    <div className="icon-wrapper" onClick={handleUpdateIp}>
                        <ArrowRight2 size="20" />
                    </div>
                </div>
            </header>
            <section className="infoContainer">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading data</p>}
                {!isLoading && data && (
                    <>
                        <Card title="IP Address" content={data.data.ip} />
                        <Card title="Location" content={data.data.location.country} />
                        <Card title="TimeZone" content={data.data.location.timezone} />
                        <Card title="ISP" content={data.data.isp} />
                    </>
                )}
            </section>
            <section className="mapContainer">
            <MapContainer
                key={`${position[0]}-${position[1]}`}
                center={position}
                zoom={13}
                style={{ height: "70vh",width:"100%" }}
                >

<TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
                 {data && data.data.location && (
            <Marker
              icon={icon}
              position={[data.data.location.lat, data.data.location.lng]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )}
                </MapContainer>
            </section>
        </>
    );
}

export default IPAddressTracker;
