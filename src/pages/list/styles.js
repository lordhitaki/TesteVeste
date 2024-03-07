import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  margin: 0px;
  text-align: center;
`;

export const BoxList = styled.div`
  background-color: #ccc;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  grid-gap: 20px; 
  justify-content: center;
  padding: 20px; 
  margin-top: 30px;
  margin-bottom:30px;
  border: 8px solid black;
  border-radius: 7px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  padding: 20px; 
  border: 1px solid black;
  border-radius: 7px;
  `;

export const CardImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 10px;
`;

export const BoxFilters= styled.div`
display: flex;
  gap: 20px;
  margin-top: 20px;
`