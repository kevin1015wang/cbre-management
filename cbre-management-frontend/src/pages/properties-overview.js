import { styled } from "baseui";
import PropertyCard from '../components/propertyCard';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "16px",
  overflow: "hidden",
});

const LeftColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
});

const RightColumn = styled("div", {
  flex: 1,
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  padding: "16px",
  height: "500px",
});

export default function PropertiesOverview() {
  const apiKey = process.env.REACT_APP_API_KEY;

  if (!apiKey) {
    console.error("API key is missing. Make sure it is defined in your .env file.");
    return <div>Error: Missing API key</div>;
  }

  return (
    <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <LeftColumn>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </LeftColumn>

      <RightColumn>
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </RightColumn>
    </ContentWrapper>
  );
}
