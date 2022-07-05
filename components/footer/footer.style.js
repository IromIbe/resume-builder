import styled from "styled-components";

export const FooterCont = styled.div`
.items{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-gap: 20px;
    justify-items:center;

   @media only screen and (max-width: 680px) {
    justify-items:left;
   }

.link{
    p{
        font-size:14.4px;
    }
}
}
`;
