import styled from 'styled-components'
import db from '../db.json'
import Widget from "../src/components/Widget";

const Title = styled.h1`

  font-size: 50px;
  color: ${({theme}) => theme.colors.primary};
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



const BackgroundImage = styled.div`
  background-size: cover;
  background-image: url(${db.bg});
  flex: 1;
`




export default function Home() {
    return (
        <BackgroundImage>
            <QuizContainer>

                <Widget>
                    <Widget.Header>Teste</Widget.Header>
                    <Widget.Content>Teste</Widget.Content>
                </Widget>
                <Widget>
                    <Widget.Content>Teste2</Widget.Content>
                </Widget>
            </QuizContainer>
        </BackgroundImage>
    )
}
