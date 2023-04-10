import React from 'react';
import styled from 'styled-components';


  const Container = styled.div`
    position: relative;
    width: 225px;
    left: 2em;
    margin: 2px;
  `;

  const ScaleBar = styled.div`
    display: inline-flex;
    /* position: relative; */
    background-color: grey;
    height: 10px;
    width: 40px;
    margin: 0 2px;
  `;

  const Pointer = styled.div`
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    left: 2px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
  `;

  const LowText = styled.span`
    font-size: 12px;
  `;

  const HighText = styled.span`
    position: absolute;
    right: 0px;
    font-size: 12px;
  `;


const ProductBreakdown = ({characteristic, category}) => {

  return (
   <Container>
    <div>{category}</div>
    <Pointer style={{left: (2 + Math.round(characteristic.value * 208 / 5)) + "px"}}/>
    {[...new Array(5)].map(() => <ScaleBar></ScaleBar>)}

    <LowText>Poor</LowText>
    <HighText>Great</HighText>
   </Container>
  )
}

export default ProductBreakdown;
