import styled from "styled-components"
import ReactModal from 'react-modal'


export const Container = styled.div`
margin: 1rem 4rem;
display: flex;
align-items: center;
justify-content: space-between;


.image {
cursor: pointer;
transition: transform 0.2s;

&:hover {
    transform: translate(-1px, -1px);
}
}

button {
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--blue-gray);
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.2s;

    &:hover {
        transform: translate(1px, -1px);
        color: #52b69a

    }
}

`