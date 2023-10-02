import React from 'react'
import styled from "styled-components";
import Section from './Section';
function Home() {
  return (
    <Container>
      <Section 
      title="Model S"
      description="Order Online for touchless delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      img="model-s.jpg"
      />

      <Section 
      title="Model Y"
      description="Order Online for touchless delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      img="model-y.jpg"
      />

      <Section 
      title="Model 3"
      description="Order Online for touchless delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      img="model-3.jpg"
      />

<     Section 
      title="Model X"
      description="Order Online for touchless delivery"
      leftButtonText="Custom Order"
      rightButtonText="Existing Inventory"
      img="model-x.jpg"
      />

      <Section 
      
      title="Low Cost Solar Panel in America"
      description="Money-back guarantee"
      leftButtonText="Order now"
      rightButtonText="Learn More"
      img="solar-panel.jpg"
      />

      <Section 
      title="Solar for New Roofs"
      description="Solar Roof cost less than New Roofs Plus Solar Panel"
      leftButtonText="Order now"
      rightButtonText="Learn More"
      img="solar-roof.jpg"
      />

      <Section 
      title="Accessories"
      description=""
      leftButtonText="Order now"
      img="accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container=styled.div`
    height:100vh;

`