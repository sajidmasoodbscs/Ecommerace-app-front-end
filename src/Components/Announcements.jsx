import styled from "@emotion/styled"

const Container=styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-style: 14px;
font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
        We offer 5$ off on friday and monday. Hurry Up!
    </Container>
  )
}

export default Announcements