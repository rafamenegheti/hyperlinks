
import styled from "styled-components";
import Image from 'next/image'
export const Main = styled.main`
height: 100vh;
width: 100%;
`
export const Container = styled.div`
   margin-top: 5rem;
   margin-left: auto;
   margin-right: auto;
    max-width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 90vh;


    .userInfo {
        background-color: #72efdd70;
        padding: 1rem;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        border-radius: 10px;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    }
    .userCard {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction:  column;  
        
        p {
            margin-top: 1.7rem;
        }
    }

    .userDesc {
        margin: 5rem;
    }

.imageContainer {
    position: relative;
    border-radius: 100%;
    height: 150px;
    width: 150px;
    border: 2px #fcbf49 solid;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
`


export const ImageAvatar = styled(Image)`
border-radius: 100%;
`

export const CardsContainer = styled.div`

`
