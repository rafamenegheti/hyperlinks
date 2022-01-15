import styled from "styled-components";

export const Button = styled.a`

position: relative;

padding: 0.5rem 1rem;
cursor: pointer;
display: flex; 
align-items: center;
border-radius: 5px;

p {
    margin-right: 0.5rem;
}

&::after, &::before {
    border: 2px solid #ff006e;
    border-radius: 5px;
    content: "";
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: transform 0.3s ease;


}

&:hover::after {
    transform: translate(-3px, -3px);
}

&:hover::before {
    transform: translate(3px, 3px);
}



`