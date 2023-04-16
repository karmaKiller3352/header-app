import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 2px solid darkblue;
  border-bottom: 2px solid darkblue;
`;

const HeaderTitle = styled.div`
  font-size: 40px;
  color: darkblue;
  font-family: sans-serif;
`;

const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
  outline-color: darkblue;
`;

function HeaderApp() {
  const [count, setCount] = useState(0);

  return (
    <HeaderContainer>
      <HeaderTitle>{`Header Remote App ${count > 0 ? count : ""} ${
        count > 0 ? "clicked" : ""
      }`}</HeaderTitle>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Button1
      </Button>
    </HeaderContainer>
  );
}

export default HeaderApp;
