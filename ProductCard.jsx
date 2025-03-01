import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
row-gap: 30px;
max-width:380px;
padding:20px;
`;

const Card = styled.div`
background:rgb(246, 192, 186);
border-radius: 20px;
padding:20px;
display:flex;
align-items:center;
gap:16px;
box-shadow: 0px 4px 8px rgba(0,0,0,0.4);

`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
`;

const Info = styled.div`
  flex: 1;

`;

const Title = styled.h3`
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;;
`;

const BuyButton = styled.button`
  background-color:rgb(201, 105, 105);
  color: white;
  padding: 8px 15px;
  border-radius: 10px;

  cursor: pointer;
  font-size: 14px;
  transition: 0.3s ease;

  &:hover {
    background-color:rgb(253, 5, 5);
  }
`;


const ProductCard = () => {
  return (
  <CardContainer>
    <Card>
        <Image src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww" alt="product" />
        <Info>
            <Title>Nike Air Pegasus</Title>
            <Subtitle>by Nike</Subtitle>
            <Subtitle>Your workhouse with wing retunrs.</Subtitle>
            <Price>$180.00</Price>
        </Info>
        <BuyButton>Buy</BuyButton>
    </Card>  

    <Card>
        <Image src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww" alt="product" />
        <Info>
            <Title>Nike Air Pegasus</Title>
            <Subtitle>by Nike</Subtitle>
            <Subtitle>Your workhouse with wing retunrs.</Subtitle>
            <Price>$180.00</Price>
        </Info>
        <BuyButton>Buy</BuyButton>
    </Card>  
  </CardContainer>
  )
}

export default ProductCard