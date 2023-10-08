"use client";

import { PropsWithChildren } from "react";
import L from "leaflet";
import { bbox } from "@turf/turf";
import { GeoJSON as ReactLeafletGeoJSON } from "react-leaflet";
import type { GeoJSONProps } from "react-leaflet";
import type { GeoJsonObject } from "geojson";

import {
  SetBounds,
  checkValidityBbox,
  convertBboxToLeafletBounds,
} from "./utilities";
import { Json } from "@/types/_supabase";

type DatabaseJSON = Omit<GeoJSONProps, "data"> & { data: Json };

/**
 * Show GeoJSON on the map, but using circle markers instead of the default Leaflet image-based marker.
 * Sets bounds to calculated bounding box of provided GeoJSON (assuming there is only one GeoJSON for a given map).
 * Accepts data as type Json (from Supabase). As we know it will be valid GeoJSON, we have to assert this when passing the value to the React Leaflet GeoJSON component.
 */
const GeoJSON = ({
  data,
  children,
  ...props
}: PropsWithChildren<DatabaseJSON>) => {
  if (!data) return null;

  const dataBbox = bbox(data);
  const bounds = checkValidityBbox(dataBbox)
    ? convertBboxToLeafletBounds(dataBbox)
    : null;

  return (
    <>
      <ReactLeafletGeoJSON
        data={data as unknown as GeoJsonObject}
        pointToLayer={(geoJsonPoint, latlng) =>
          L.circleMarker(latlng, { radius: 10 })
        }
        {...props}
      />
      <SetBounds bounds={bounds} />
    </>
  );
};

export default GeoJSON;
