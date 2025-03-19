import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 1.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);  
`;

export const ImageLogo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    left: 0.8rem;
    color: #757575;
    font-size: 0.8rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    font-size: 0.7rem;
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
  padding: 0.2rem 0.5rem;
  border: none;
  background-color: #0bade3;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #007bb5;
  }
`;
