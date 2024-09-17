import styled from "styled-components"

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3em;
  color: red;
`

const Component = () => (
  <Container>
    <Title>Hello World</Title>
  </Container>
)

export default Component
