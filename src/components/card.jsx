import styled from "styled-components";

const Card = () => {
  const Card = styled.div`
  height: 400px;
  width: 300px;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  font-size: 15px;
  `
  const Pic = styled.img`
  height: 200px;
  width: inherit;
  border: 1px solid blue;
  `
  const Title = styled.div`
  text-align: left;
  font-size:25px;
  font-weight: 400;
  `
  const Location = styled.div`
  text-align:left`
  
  const Intro = styled.div`
  text-align:left
  `
  const Designation = styled.div`
  text-align:left`
  return(
    <Card>
      <Pic />
      <Title>Name</Title>
      <Location>Location</Location>
      <Intro>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</Intro>
      <Designation>Web Developer</Designation>
    </Card>
  )
}

export default Card;