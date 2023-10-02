import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link, Navigate } from "react-router-dom";
import Carpage from "./CarPage";
import Header from "./Header";
function Section({ title, description, leftButtonText, rightButtonText, img }) {
  //fetch from cloud
  function gotoCarpage() {
    <Navigate replace to={"/model3"} />;
  }
  console.log(title);
  return (
    <>
      <Header />
      <section id={title}>
        <Wrap bgImage={img}>
          <Fade direction="up">
            <ItemText>
              <h1>{title}</h1>
              <p>{description}</p>
            </ItemText>
          </Fade>

          <Buttons>
            <Fade direction="up">
              <ButtonGroup>
                <Link to={"/model3"}>
                  <LeftButton>{leftButtonText}</LeftButton>
                </Link>

                {rightButtonText && (
                  <RightButton>{rightButtonText}</RightButton>
                )}
              </ButtonGroup>
            </Fade>
          </Buttons>
        </Wrap>
      </section>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  // background:orange;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const Buttons = styled.div``;
