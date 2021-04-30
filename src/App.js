import Page1 from "./components/Page1";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #0d0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <MainContainer>
        <Page1 />
      </MainContainer>
    </>
  );
}

export default App;
