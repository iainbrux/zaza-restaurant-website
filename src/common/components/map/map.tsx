import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const Map = () => {
  const defaultProps = {
    center: {
      lat: 53.652_21,
      lng: -2.619_74,
    },
    zoom: 15,
  };

  return (
    <div className="mb-20" style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "no api key for you" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955_413} lng={30.337_844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
