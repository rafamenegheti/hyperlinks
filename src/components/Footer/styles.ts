import styled from "styled-components";

export const FooterStyled = styled.footer`
 position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem;

  background-color: var(--blue-light);
  color: white;
  text-align: center;

  p {
      font-size: 0.7rem;
      color: var(--blue-gray)
  }

  .footerContainer {
    margin-left: 10rem;
    margin-right: 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;


      p > div {
          display: flex;
          flex-direction: row;

      };

      div > div {

          display: flex;
          justify-content: right;
          align-items: center;
          gap: 0.7rem;

      };

      a {


        display: flex;
          justify-content: right;
          align-items: center;
          gap: 0.7rem;

          cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7)
        }
      };

  }
`
