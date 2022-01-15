
import styled from "styled-components";

export const Main = styled.main`
height: 100vh;

   

`

export const Container = styled.div`
@import "../styles/breakpoints.scss";



    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-height: 90vh;



   section {
    flex: 1 1 0px;
    margin: 4rem;
   }

/* 
   @media (max-width: 1044px) {
       flex-direction: column;
   } */


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

       @media (max-width: 1000px) {
        h1 {
           font-size: 2rem;
           color: var(--blue-gray);
           font-style: bold;
       }

       p {
           margin-top: 0.7rem;
           font-weight: 400;
       }
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
 

   }


`
