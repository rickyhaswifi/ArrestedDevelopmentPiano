import styled from 'styled-components';

export const PlayContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #F16808;
`;
export const PageContainer = styled.section`
  padding-top:5%;
  width: 90%;
  margin:auto;
`;

export const NameContainer = styled.section`
  font-size:2.5em;
  text-align:center;
`;

export const ButtonContainer = styled.section`
  margin:auto;
  width:100%;
  display:inline-block;
  text-align:center;
`;

export const EmailLink = styled.a`
  color: #2F2D78;
`;

export const PlayPassButton = styled.button`
 @media (max-width: 769px) {
  width: 125px;
  height: 125px;
  font-size:2em;
}

@media (min-width: 769px) {
  width:350px;
  height:350px;
  font-size:3em;
}
  border-radius:50%;
  background-color: #2F2D78;
  color: white;
  &:hover, &:focus{
    background-color: #2F2DAC;
  }
`;


export const PlayAcceptButton = styled.button`

@media (max-width: 769px) {
  width: 125px;
  height: 125px;
  font-size:2em;
}

@media (min-width: 769px) {
  width:350px;
  height:350px;
  font-size:3em;
}
  border-radius:50%;
  background-color: #2D7830;
  color: white;
  &:hover, &:focus{
    background-color: #2A9C2F;
}
`;