import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fa8072;
  margin-top: 100px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Input = styled.div`
    input {
        border: none;
        padding: 10px 20px;
        margin-right: 30px;
    }
    
    button {
        background: #fff;
        color: #fa8072;
        border: none;
        padding: 10px 20px;

        &:hover {
            background: ${darken(0.03, "#fff")}
        }
    }
`;