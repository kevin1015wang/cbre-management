import logo from './logo.svg';
import './App.css';
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { StatefulInput } from "baseui/input";
import NavBar from './components/navbar';
import PropertyCard from './components/propertyCard';

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <NavBar />
        
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />

      </BaseProvider>
    </StyletronProvider>
  );
}
