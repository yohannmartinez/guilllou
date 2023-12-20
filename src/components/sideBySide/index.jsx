import { styled } from "styled-components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoieW9oYW5ubWFydGluZXptaXNwb3RzIiwiYSI6ImNrZjQybmwwNzA5Mngyc280dzBpazFsMnEifQ.h3FxRjUqVjCo3AALyuzW1w";

const Container = styled.div`
  width: 100%;
  gap: 4em;
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
  }

  @media (min-width: 750px) {
    flex-direction: ${({ imagePosition }) =>
      imagePosition === "right" ? "row-reverse" : "row"};
  }
`;

const Image = styled.div`
  flex: 1;
  position: relative;
  max-width: 500px;

  position: relative;
  z-index: 10;
  background: ${({ image }) => `url('${image}')`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 0px) {
    min-height: 300px;
    height: 300px;
  }

  @media (min-width: 750px) {
    min-height: 500px;
    height: 500px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideBySide = ({
  coordinates,
  className,
  imagePosition,
  children,
  image,
}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.019);
  const [lat, setLat] = useState(48.857);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current || !coordinates) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker().setLngLat([2.019, 48.857]).addTo(map.current);

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Container className={className} imagePosition={imagePosition}>
      {image && <Image image={image} />}
      {coordinates && <div ref={mapContainer} className="map-container" />}
      <Content>{children}</Content>
    </Container>
  );
};

export default SideBySide;
