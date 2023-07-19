"use client";

import { PropsWithChildren } from "react";
import { MapContainer, TileLayer, MapContainerProps } from "react-leaflet";

import { convertCoordinatesToLeafletLatLng } from "./utilities";

import "leaflet/dist/leaflet.css";

/**
 * Provides a map with a single tile-based basemap (specified in the project's environment variables)
 */
const Map = ({ children, ...props }: PropsWithChildren<MapContainerProps>) => {
  // Convert environment variables
  const zoom = process.env.NEXT_PUBLIC_MAP_DEFAULT_ZOOM
    ? parseInt(process.env.NEXT_PUBLIC_MAP_DEFAULT_ZOOM, 10)
    : null;
  const maxZoom = process.env.NEXT_PUBLIC_MAP_MAX_ZOOM
    ? parseInt(process.env.NEXT_PUBLIC_MAP_MAX_ZOOM, 10)
    : null;
  const center = process.env.NEXT_PUBLIC_MAP_DEFAULT_CENTER
    ? convertCoordinatesToLeafletLatLng(
        process.env.NEXT_PUBLIC_MAP_DEFAULT_CENTER,
      )
    : null;

  // Check that they exist (as they are necessary for Leaflet)
  if (!zoom || !center || !maxZoom)
    throw Error("Missing map environment variables");

  return (
    <MapContainer center={center} zoom={zoom} maxZoom={maxZoom} {...props}>
      <TileLayer
        url={`${process.env.NEXT_PUBLIC_MAP_TILELAYER_URL}`}
        attribution={`${process.env.NEXT_PUBLIC_MAP_TILELAYER_ATTRIBUTION}`}
      />
      {children}
    </MapContainer>
  );
};

export default Map;
