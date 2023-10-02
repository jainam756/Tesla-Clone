
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CarForm from './Carform';

const CarPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const CarPhoto = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* margin-left:25px ; */
  width: 70%;
`;

const CarImage = styled.img`
  position: static;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
`;

const CarDetails = styled.div`
  width: 35%;
  padding: 20px;
  background-color: #f6f9ff;
  text-align: center;
`;

const CarTitle = styled.h2`
  font-size: 24px;
`;

const CarDescription = styled.p`
  font-size: 15px;
  color: grey;
`;

const BuyCarButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CarDetail=styled.div`
    
    display: flex;
    font-size: 30px;
    padding: 10px;
    margin:5px;
    align-items: center;
    justify-content: center;

`

const Col=styled.div`
    margin:10px;
    
`

const Colhead=styled.p`
    font-size: 15px;
    color: #3a3a3a;
`

const Colunit=styled.span`
    font-size: 20px;
`

const SubModel=styled.div`
    margin:10px;

`

const CarPage = () => {
  return (
    <CarPageWrapper>
      <CarPhoto>
        <CarImage src="public/model3/1.jpg" alt="Car" />
      </CarPhoto>
      <CarDetails>
        <CarTitle><h1>Model 3</h1></CarTitle>
        <CarDescription>
            <div>Est. Delivery: Aug – Sep 2023</div>
            {/* <div><Link href="http://">Enter Delivery Zip Code</Link></div> */}
            <CarDetail>
                <Col>
                    <span>330</span>
                    <Colunit>mi</Colunit>
                    <Colhead>Range</Colhead>
                </Col>

                <Col>
                    <span>135</span>
                    <Colunit>mph</Colunit>
                    <Colhead>Top Speed</Colhead>

                </Col>

                <Col>
                    <span>4.8</span>
                    <Colunit>sec</Colunit>
                    <Colhead>0-60mph</Colhead>
                </Col>
            </CarDetail>
              <SubModel>
                
                <CarForm></CarForm>
              </SubModel>

        </CarDescription>
        <BuyCarButton>Buy Car</BuyCarButton>
      </CarDetails>
    </CarPageWrapper>
  );
};

export default CarPage;
