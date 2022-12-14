import { useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import {
  DOES_MAP_FLY_ONCLICK,
  LEAFLET_CENTER,
  LEAFLET_SCROLLZOOM,
  LEAFLET_TILELAYER_URL,
  LEAFLET_ZOOM,
} from "../../utils/config";
import { useEffect } from "react";

const modalStyle = {
  content: {
    display: "flex",
    flexDirection: "column",
  },
};

function LocationMarker({
  isValid,
  setValid,
  curMarker,
  setCurMarker,
  markerCords,
}) {
  const map = useMap();
  useMapEvent({
    click(e) {
      const newCords = Object.values(e.latlng);
      setCurMarker(newCords);
      DOES_MAP_FLY_ONCLICK && map.flyTo(newCords);
      setValid(true);
    },
  });

  useEffect(() => {
    const newCords = markerCords || LEAFLET_CENTER;
    setCurMarker(newCords);
    map.flyTo(newCords);
  }, []);

  return isValid ? <Marker position={curMarker}></Marker> : <></>;
}

const SumbitMapModal = ({ markerCords, setMarker }) => {
  const [markerIsValid, setMarkerValid] = useState(false);
  const [curMarker, setCurMarker] = useState(LEAFLET_CENTER);

  function onSubmit() {
    setMarker(curMarker);
  }

  return (
    <Popup
      trigger={
        <button className="rounded-lg border-2 border-main-600 px-6 py-2 font-bold text-main-600">
          {markerCords ? "تغییر آدرس روی نقشه" : "ثبت آدرس روی نقشه"}
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
              center={curMarker}
              scrollWheelZoom={LEAFLET_SCROLLZOOM}
              zoom={LEAFLET_ZOOM}
              style={{ flex: 1, margin: "10px 0" }}
            >
              <TileLayer url={LEAFLET_TILELAYER_URL} />
              <LocationMarker
                isValid={markerIsValid}
                setValid={setMarkerValid}
                curMarker={curMarker}
                setCurMarker={setCurMarker}
                markerCords={markerCords}
              />
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
              className={
                markerIsValid
                  ? "button rounded-lg bg-main-500 py-1 px-8 text-base text-white"
                  : "button rounded-lg bg-warmGray-200 py-1 px-8 text-base text-warmGray-500"
              }
              onClick={() => {
                if (!markerIsValid) return;
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
