import styled from "styled-components";
export default function AppTittle(props) {
  const {
    tittle = 'Box Office',
    subTittle = 'Are you looking for a movie or an actor',
  } = props;
  return (
    <TitleWrapper>
      <h1>{tittle} </h1>
      <p>{subTittle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
