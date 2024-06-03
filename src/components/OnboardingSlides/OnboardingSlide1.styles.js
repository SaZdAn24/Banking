import styled from 'styled-components';


export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;

`;

export const Title = styled.h1`
  font-size: 26px;
  margin: 20px 0;
  color: black;

`;

export const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #808080;
`;

export const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #1E90FF;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 20px;
  width: 335px;
  height: 56px;

`;

export const StyledImage = styled.img`
  width: 500px;  
  height: auto;
  border-radius: 10%;
`;
