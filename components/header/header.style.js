import styled from "styled-components";

export const HeaderCont = styled.div`
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  ${"" /* font-family: "Montserrat", sans-serif; */}
  @media only screen and (max-width: 300px) {
    padding-left: unset;
    padding-right: unset;
  }
  .logo {
    @media only screen and (max-width: 400px) {
      margin-right: 10px;
    }
  }

  ul {
    li {
      padding: 0 5px;
      outline: none;
      border: none;

      a {
        text-decoration: none;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        &:hover {
          color: black;
        }
      }
      button {
        border: 1px solid #0267f5;
        padding: 3px 6px;
        border-radius: 6px;
        font-size: 12px;
      }
    }
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
  .nav-links-mobile {
    position: absolute;
    display: block;
    list-style: none;
    top: 75px;
    left: 0;
    background-color: #f8f9fa;
    transition: all 3s ease-in-out;
    width: 100%;

    button {
      width: 150px;
      margin-bottom: 25px;
    }
  }

  .mobile-nav {
    display: none;
    @media only screen and (max-width: 1000px) {
      display: block;
      padding: 10px 10px 5px 0;
    }
  }
`;
