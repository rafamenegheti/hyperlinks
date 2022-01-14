import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 4rem;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 17rem;

    transition: transform 0.2s ease-in-out;


&:hover {
    transform: translate(0px, 5px);
    
}

    /* animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left:30px;
    margin-top: 5px;


@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, 0px); }    
} */

    .image {
        margin-bottom: 1rem;
    }

    .write {
        font-style: italic;
        text-align: center;
        h1{
            font-weight: 400;
            font-size: 1rem;
            color: var(--black)

        }

        h2 {

            font-weight: 400;
            font-size: 0.8rem;
            color: var(--blue-grayer)
        }

    }
`