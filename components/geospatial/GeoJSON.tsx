"use client";

import { PropsWithChildren } from "react";
import L from "leaflet";
import { bbox } from "@turf/turf";
import { GeoJSON as ReactLeafletGeoJSON } from "react-leaflet";
import type { GeoJSONProps } from "react-leaflet";

import {
  SetBounds,
  checkValidityBbox,
  convertBboxToLeafletBounds,
} from "./utilities";

/**
 * Show GeoJSON on the map, but using circle markers instead of the default Leaflet image-based marker.
 * Sets bounds to calculated bounding box of provided GeoJSON (assuming there is only one GeoJSON for a given map).
 */
const GeoJSON = ({
  data,
  children,
  ...props
}: PropsWithChildren<GeoJSONProps>) => {
  const dataBbox = bbox(data);
  const bounds = checkValidityBbox(dataBbox)
    ? convertBboxToLeafletBounds(dataBbox)
    : null;

  return (
    <>
      <ReactLeafletGeoJSON
        data={data}
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
