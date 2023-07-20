"use client";

import { latLng, latLngBounds, LatLngBoundsExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { BBox } from "@turf/turf";

const BOUNDS_PADDING = 0.5;

/**
 * Basic conversion of coordinates from a string (e.g. from an environment variable) to a Leaflet latLng
 */
export const convertCoordinatesToLeafletLatLng = (coordinates: string) => {
  const parsedCoordinates = coordinates
    .split(",")
    .map((coordinate) => parseInt(coordinate, 10));
  return latLng(parsedCoordinates[0], parsedCoordinates[1]);
};

/**
 * Simple bounds setter (must be used as a child component of a MapContainer)
 */
export const SetBounds = ({
  bounds,
}: {
  bounds?: LatLngBoundsExpression | null;
}) => {
  const map = useMap();
  if (bounds) map.fitBounds(bounds);
  return null;
};

/**
 * Convert a bounding box (provided by Turf) into a Leaflet latLngBounds, with some padding
 */
export const convertBboxToLeafletBounds = (bbox: BBox) => {
  return latLngBounds(latLng(bbox[1], bbox[0]), latLng(bbox[3], bbox[2])).pad(
    BOUNDS_PADDING,
  );
};

/**
 * Ensure that the calculated bounding box is valid
 */
export const checkValidityBbox = (bbox: BBox) =>
  bbox && !bbox.some((coordinate) => coordinate === Infinity);
