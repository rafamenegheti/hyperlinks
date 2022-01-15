import styled from "styled-components";

export const CardContainer = styled.ul`
display: flex;
flex-direction: row;
/* position: relative; */


li {
    display: inline;
    position: relative;
}

li:nth-child(1) {
    transform: translate(-10px, -280px);
}

li:nth-child(2) {
    transform: translate(10px, -20px);
}

li:nth-child(3) {
    transform: translate(120px, 15px);
}

li:nth-child(4) {
    transform: translate(180px, -90px);
}

li:nth-child(5) {
    transform: translate(-200px, -110px);
}

li:nth-child(6) {
    transform: translate(-30px, -270px);
}

li:nth-child(7) {
    transform: translate(-225px, -180px);
}

li:nth-child(8) {
    
    transform: translate(10px, -165px);
}


`