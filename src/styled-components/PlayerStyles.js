import styled from 'styled-components';

export const PlayContainer = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #F16808;
	display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayPassButton = styled.button`
	height: 250px;
	width: 250px;
	border-radius:50%;
	background-color: #2F2D78;
  color: white;
  font-size:3em;

  &:hover, &:focus{
    background-color: #2F2DAC;
  }

`;
export const PlayAcceptButton = styled.button`
	height: 250px;
	width: 250px;
	border-radius:50%;
	background-color: #2F2D78;
  color: white;
  font-size:3em;

  &:hover, &:focus{
    background-color: #2F2DAC;
  }

`;