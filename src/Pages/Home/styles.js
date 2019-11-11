import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  text-align: center;
  
  > h1 {
      margin: 100px 0;
  }
`;

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 150px;
        }

        > strong {
            font-size: 16px;
            text-align: left;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            text-align: left;
            color: #FA8072;
            margin: 10px 0 20px;
        }

        button {
            background: #FA8072;
            color: #fff;
            border: 0;
            border-radius: 2px;
            overflow: hidden;
            margin-top: auto;
            
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            transition: background .2s;

            &:hover {
                background: ${darken(0.03, "#fa8072")}
            }

            > span {
                margin-right: 5px;
                text-transform: uppercase;
            }
        }
    }
`;
