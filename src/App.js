import "./App.css";
// Component
import styled from "styled-components";
import { Head } from "./components/Head";
// Asset image logo
import logo from "./assets/images/logo.png";
// Main layout of the contents
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <Container>
      <Head logo={logo} />
      <MainLayout />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1400px;
  max-height: 765px;
  margin: 0 auto;
  overflow: hidden;
`;
