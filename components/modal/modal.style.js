import styled from "styled-components";

export const ModalCont = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.05);
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  ${"" /* left: 17%; */}
  bottom: 0;
`;

export const ModalInfo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  min-width: 40%;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  height: 60%;
  border-radius: 15px;

  .close-btn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    ${"" /* transition: all 0.25s ease; */}
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 30px;
    top: 30px;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
    &:hover {
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
      transform: translate(-4px, 4px);
    }
  }
`;
