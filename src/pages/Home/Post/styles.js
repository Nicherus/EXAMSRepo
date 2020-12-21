import styled from 'styled-components';
import Colors from '../../../config/Colors'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${Colors.babyBlue};
    font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    background: ${Colors.blue};
    border-radius: 10px;
`;

export const SelectablesContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 60%;
    height: 60%;
    background: ${Colors.blue};
    border-radius: 10px;
`;

export const Selectable = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    background: ${Colors.darkBlue};
    color: ${Colors.white};
    border: none;
    opacity: ${props => props.opacity};
	cursor: pointer;
    transition: all .2s;
        
    &:hover{
        background: ${Colors.babyBlue};
    }
`;

export const Text = styled.h1`
    font-size: 2rem;
    line-height: 1.7rem;
    margin: 1rem;
    text-decoration: none;
    color: ${Colors.white};
`;

export const Input = styled.input`
    padding: 1rem;
    width: 16rem;
    margin: 0.2rem 0;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background-color: ${Colors.white};
`;

export const Button = styled.button`
    width: 16rem;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.1rem;
    background: ${Colors.darkBlue};
    color: ${Colors.white};
    border: none;
    opacity: ${props => props.opacity};
	cursor: pointer;
    border-radius: 5px;
    transition: all .2s;
        
    &:hover{
        background: ${Colors.babyBlue};
        border: 1px solid ${Colors.babyBlue};
    }
`;
