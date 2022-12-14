import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import {
  DOES_MAP_FLY_ONCLICK,
  LEAFLET_CENTER,
  LEAFLET_SCROLLZOOM,
  LEAFLET_TILELAYER_URL,
  LEAFLET_ZOOM,
} from "../../utils/config";

const modalStyle = {
  content: {
    display: "flex",
    flexDirection: "column",
  },
};

function LocationMarker() {
  const [markerCords, setMarker] = useState(LEAFLET_CENTER);
  const map = useMapEvent({
    click(e) {
      const newCords = Object.values(e.latlng);
      setMarker(newCords);
      DOES_MAP_FLY_ONCLICK && map.flyTo(newCords);
    },
  });

  return <Marker position={markerCords}></Marker>;
}

const SumbitMapModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function onSubmit() {}

  return (
    <Popup
      trigger={
        <button className="rounded-lg border-2 border-main-600 px-6 py-2 font-bold text-main-600">
          دکمه موقت ثبت آدرس روی نقشه
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> ثبت آدرس روی نقشه</div>
          <div className="content">
            <MapContainer
              className="aspect-video h-[300px] w-full rounded-lg"
              center={LEAFLET_CENTER}
              scrollWheelZoom={LEAFLET_SCROLLZOOM}
              zoom={LEAFLET_ZOOM}
              style={{ flex: 1, margin: "10px 0" }}
            >
              <TileLayer url={LEAFLET_TILELAYER_URL} />
              <LocationMarker />
            </MapContainer>
          </div>
          <div className="actions flex justify-center gap-3">
            <button
              className="button rounded-lg bg-warmGray-200 py-1 px-8 text-base text-warmGray-500"
              onClick={() => {
                close();
              }}
            >
              بستن{" "}
            </button>
            <button
              className="button rounded-lg bg-main-500 py-1 px-8 text-base text-white"
              onClick={() => {
                onSubmit();
                close();
              }}
            >
              تایید{" "}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default SumbitMapModal;
