import styled from 'styled-components';

export const PlayContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #F16808;
`;
export const PageContainer = styled.section`
  padding-top:10%;
  width: 90%;
  margin:auto;
`;

export const NameContainer = styled.section`
  padding-top:10%;
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
  margin:15px !important;
  min-width: 200px;
  max-width:350px;
  min-height: 200px;
  max-height:350px;
  border-radius:50%;
  background-color: #2F2D78;
  color: white;
  font-size:3em;
  &:hover, &:focus{
    background-color: #2F2DAC;
  }
`;


export const PlayAcceptButton = styled.button`
  margin:15px !important;
  min-width: 200px;
  max-width:350px;
  min-height: 200px;
  max-height:350px;
  border-radius:50%;
  background-color: #2D7830;
  color: white;
  font-size:3em;
  &:hover, &:focus{
    background-color: #2A9C2F;
}
`;