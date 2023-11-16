"use client";
import {
  useLoadScript,
  GoogleMap,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";

const Map: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 36.5900818, lng: 3.1575222 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
      panControl: false,
      scaleControl: false,
      zoomControl: false,
      gestureHandling: "none",
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative z-50 ">
      <div className=" bg-[#0054a7]">
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerClassName={"w-full h-96 opacity-70"}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          <OverlayViewF
            position={mapCenter}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="bg-[#0054a7] absolute h-16 w-16 rounded-full items-center flex justify-center opacity-100 text-white">
              <button className="" type="button">
                <i className="fa fa-2x fa-map-marker "></i>
              </button>
            </div>
          </OverlayViewF>
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
