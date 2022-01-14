import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #8338ec10;
    padding: 0.5rem;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    height: 2.3rem;
    transition: transform 0.2s ease-in-out;


    &:hover {
        transform: translate(0px, -5px);
        
    }
    img {
        display: inline;
        width: 150px;
        height: 150px;
    }



`