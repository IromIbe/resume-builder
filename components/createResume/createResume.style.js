import styled from "styled-components";

export const CreateBody = styled.div`
  form {
    label {
      width: 100%;
      display: flex;
      font-weight: 500;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;
      color: #000;
      flex: 1;
      margin: 15px 5px;
      input,
      textarea,
      select {
        font-weight: normal;
        margin-top: 7px;
        width: 100%;
        font-size: 14.5px;
        border: 1px solid #ccc;
        padding: 8px;
        border-radius: 6px;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media only screen and (max-width: 400px) {
        font-size: 14px;
      }
    }
  }
`;
