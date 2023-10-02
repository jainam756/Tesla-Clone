import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/public/logo.svg"></img>
      </a>
      <Menu>
      <a href="#Model 3">Model 3</a>
      <a href="#Model X">Model X</a>
      <a href="#Model Y">Model Y</a>
      <a href="#Model S">Model S</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <Burgerav show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">CyberTruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </Burgerav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-transform: uppercase;
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Burgerav = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 4;
  list-style: none;
  padding: 20px;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
