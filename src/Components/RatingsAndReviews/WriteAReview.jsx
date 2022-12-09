import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Form from './Form.jsx';

const WriteAReview = ({isWritingReview, onClose, characteristics, productID}) => {

  const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0px;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transition: opacity 0.8s visibility 0.8s transform 0.8s;

    ${props => props.isWritingReview && css`
       opacity: 1;
       visibility: visible;
       transform: scale(1);
       transition: opacity 0.8s visibility 0.8s transform 0.8s;
    ` }
  `;

  // const OverlayHidden = styled(Overlay)`
  //   opacity: 0;
  //   visibility: hidden;
  // `;

  const Container = styled.div`
     width: 75%;
     height:  80%;
     top: 15px;
     display: flex;
     background: yellow;
     position: relative;
     justify-content: center;
     overflow-y: auto;
  `;

  const Closebtn = styled.div`
    position: absolute;
    top: 8px;
    right: 10px;
    cursor: pointer;
  `;

  // const ReviewForm = styled.form`
  //   /* display: block; */
  // `;

  // if (!isWritingReview) return <OverlayHidden>Write a Review</OverlayHidden>;
  return (
    <Overlay isWritingReview={isWritingReview}>
      <Container >
        <Closebtn onClick={onClose}>X</Closebtn>
        <Form characteristics={characteristics} productID={productID}/>
      </Container>
    </Overlay>
  )
};

export default WriteAReview;