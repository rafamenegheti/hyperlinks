import styled from "styled-components";

export const Container = styled.div`
 * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: red
    }

    display: flex;

    .pbutton {
        text-decoration: none;
        padding: 20px 50px;
        font-size: 1rem;
        position: relative;

        overflow: hidden;

        color: #fff;
        border-radius: 15px;
        box-shadow: 0 0 0 0 rgba(143, 64, 248, 0.2), 0 0 0 0 rgba(36, 200, 255, 0.2);
        transition: transform 0.3s, box-shadow 0.3;
        transition: transform 5s;
        cursor: pointer;

        &::after {
            content: "";
            width: 1000px;
            height: 1000px;
            position: absolute;
            top: -50px;
            left: -100px;
            background-color: #ff3cac;
            background-image: linear-gradient(225deg, #a0c4ff 0%, #bdb2ff 50%, #ffc6ff 100%);
            z-index: -1;
        }

        &:hover {
            box-shadow: 10px -10px 25px 0 rgba(143, 64, 248, 0.2), -10px 10px 25px 0 rgba(36, 200, 255, 0.2);

            transition: box-shadow 1s;
        }
    }
`