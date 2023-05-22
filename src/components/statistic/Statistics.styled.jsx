import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 36px;
  color: black;
  text-align: center;
`;

export const WrapperFeedback = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  background-color: #edf3fb;
  color: #5b5b5b;
  font-weight: 500;
`;

export const WrapperCalcValue = styled.div`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  background-color: #edf3fb;
  color: #5b5b5b;
  font-weight: 700;
  text-transform: uppercase;
  p:not(:last-child) {
    margin-bottom: 20px;
  }
`;
