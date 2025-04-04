import styled from "styled-components";

export const ContainerResults = styled.section`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
  }
`;

export const SearchNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 80%;
`;