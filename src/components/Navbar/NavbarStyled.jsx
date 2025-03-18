import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 1.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ImageLogo = styled.img`
  width: 140px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    left: 0.8rem;
    color: #757575;
    font-size: 1.2rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    font-size: 1rem;
    background-color: #f5f5f5;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: border 0.3s ease-in-out;

    &:focus {
      border: 2px solid #0bade3;
    }
  }
`;

export const Button = styled.button`
  padding: 0.4rem 1rem;
  border: none;
  background-color: #0bade3;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #007bb5;
  }
`;
