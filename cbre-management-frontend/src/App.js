import logo from './logo.svg';
import './App.css';
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import NavBar from './components/navbar';
import PropertyCard from './components/propertyCard';

const engine = new Styletron();

// Wrapper for the content below the NavBar
const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px", // Space between the cards and the rectangle
  padding: "16px",
});

// Left side for the cards
const LeftColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px", // Space between the cards
});

// Right side for the rectangle
const RightColumn = styled("div", {
  flex: 1, // Takes up the remaining space
  backgroundColor: "#f0f0f0", // Light gray background for the rectangle
  borderRadius: "8px",
  padding: "16px",
});

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <NavBar />
        <ContentWrapper style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <LeftColumn>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </LeftColumn>

          <RightColumn>
            <h2>Google Map!</h2>
          </RightColumn>
        </ContentWrapper>
      </BaseProvider>
    </StyletronProvider>
  );
}
