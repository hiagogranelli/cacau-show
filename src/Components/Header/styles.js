import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    height: 100px;
    border-bottom: 1px solid #eee;
    
    position: relative;

    > h1 {
        color: #b23414;
    }

    > div {
        display: flex;
    }
`;

export const Categories = styled.div`
    display: flex;

    h2 {
        margin-left: 50px;
        font-size: 12px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    transition: opacity .2s;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    h2 {
        font-size: 12px;
        margin-left: 5px;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 7%;
    width: 200px;
    background: #fff;
    z-index: 1;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);

    > strong {
        display: block;
        text-align: center;
        color: #fa8072;
        margin-bottom: 5px;
    }

    > span {
        display: block;
        text-align: center;
        font-size: 10px;
    }
`;

export const Cart = styled.div`
    cursor: pointer;
    transition: opacity .2s;
    margin-left: 50px;
    position: relative;
    
    &:hover {
        opacity: 0.7;
    }
    
    > span {
        position: absolute;
        background: #fa8072;
        border-radius: 100%;
        color: #fff;
        padding: 2px;
    }
`;

export const DropdownCart = styled.div`
    position: absolute;
    top: 100%;
    background: #fff;
    width: 200px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

export const CartHeader = styled.div`
    height: 30px;
    width: 100%;
    position: relative;
    background: #fa8072;
    display: flex;
    justify-content: space-between;

    > h2 {
        color: #fff;
        font-size: 12px;
        padding: 10px;

    }
    > span {
        color: #fff;
        font-size: 10px;
        padding: 10px;
    }
`;

export const ProductCart = styled.div`
    max-width: 200px;

    

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        > svg {
        cursor: pointer;
        }

        > img {
            width: 50px;
        }

        input {
            border: none;
            color: #666;
            width: 40px;
            text-align: center;
        }

        button {
            background: none;
            border: 0;
            padding: 6px;
        }
    }

    > span {
        display: block;
        text-align: right;
        font-weight: bold;
        color: #000;
        margin-bottom: 5px;
        margin-right: 5px;
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #999;

    > strong {
        display: block;
        text-align: center;
        color: #000;
        font-weight: bold;
        margin: 10px 0;
    }

    > button {
        background: #fa8072;
        border: 0;
        color: #fff;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background .2s;

        display: flex;
        align-items: center;

        svg {
            margin-left: 5px;
        }

        &:hover {
                background: ${darken(0.03, '#fa8072')}
            }
    }
`;

