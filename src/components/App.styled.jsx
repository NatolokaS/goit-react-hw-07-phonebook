import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0px auto;
  color: green;
`;

export const LabelStyle = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  border-radius: 5px;
  border-color:yellow;
  box-shadow: 2px 2px 2px green;
    &:hover {
        border-color:yellow;
        box-shadow: 2px 2px 2px green;
    }
`;

export const ButtonStyle = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  font-weight: 500px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  background-color:#b1b45c;
  color: green;
  box-shadow: 5px 5px 5px grey;
  border: 2px solid #d3ad31;
  &:hover {
    background-color: white;
    color: green;
  }
`;