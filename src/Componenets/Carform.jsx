// Import necessary libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SubmodelContainer = styled.div`
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const SubmodelOption = styled.label`

  text-align: start;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: 2px solid ${props => (props.selected ? '#3498db' : '#ccc')};
  border-radius: 4px;
  margin:7.5px;
  padding: 15px;
  cursor: pointer;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border: 2px solid ${props => (props.selected ? '#3498db' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
`;

const ChargingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  
`;

const ChargingOption = styled.label`
  text-align: start;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: 2px solid ${props => (props.selected ? '#3498db' : '#ccc')};
  border-radius: 4px;
  margin:7.5px;
  padding: 15px;
  cursor: pointer;
`;

const BuyButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

// Component
function CarForm() {
  const [selectedSubmodel, setSelectedSubmodel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCharging, setSelectedCharging] = useState(null);

  const handleSubmodelChange = submodel => {
    setSelectedSubmodel(submodel);
  };

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  const handleChargingChange = charging => {
    setSelectedCharging(charging);
  };

  return (
    <FormContainer>
      <p>Dual Motor All-Wheel Drive</p>
      <SubmodelContainer>
      <SubmodelOption
          selected={selectedSubmodel === 'model3'}
          onClick={() => handleSubmodelChange('model3')}
        >
          Model 3
        </SubmodelOption>
        <SubmodelOption
          selected={selectedSubmodel === 'model3lr'}
          onClick={() => handleSubmodelChange('model3lr')}
        >
          Model 3 Long Range 
        </SubmodelOption>
        <SubmodelOption
          selected={selectedSubmodel === 'model3p'}
          onClick={() => handleSubmodelChange('model3p')}
        >
          Model 3 Performance
        </SubmodelOption>
      </SubmodelContainer>
      
      <ColorContainer>
      <p>Color:</p>
        {['black', 'white', 'red', 'green', 'blue'].map(color => (
          <ColorOption
            key={color}
            color={color}
            selected={selectedColor===`${color}`}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </ColorContainer>
      
      <ChargingContainer>
      <p>Choose Charging Method:</p>
        <ChargingOption
          selected={selectedCharging === 'standard'}
          onClick={() => handleChargingChange('standard')}
        >
          Standard
        </ChargingOption>
        <ChargingOption
          selected={selectedCharging === 'fast'}
          onClick={() => handleChargingChange('fast')}
        >
          Fast
        </ChargingOption>
      </ChargingContainer>
      <BuyButton>Buy Now</BuyButton>
    </FormContainer>
  );
}

export default CarForm;
