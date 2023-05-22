import styled from 'styled-components';

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border-color: #879cb7;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;
  cursor: pointer;
  background-color: #edf3fb;
  outline: none;
  &:hover {
    background-color: #879cb7;
    color: #edf3fb;
  }
`;
