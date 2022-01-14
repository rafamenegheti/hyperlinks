import styled from "styled-components";
import Link from 'next/link'

export const Main = styled.main`
height: 100vh;
`

export const Container = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

   section {
    flex: 1 1 0px;
    margin: 4rem
   }

   .section1 {
       margin-right: 7rem;
       color: var(--blue-gray);
    //    font-style: 'ABeeZee' sans-serif italic;
       
       h1 {
           font-size: 3rem;
           color: var(--blue-gray);
           font-style: bold;
       }

       p {
           margin-top: 1rem;
           font-weight: 400;
           margin-bottom: 1rem;
       }

       .button {
           margin-left: auto;
       }
   }

   .section2 {
    margin-left: 7rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
`