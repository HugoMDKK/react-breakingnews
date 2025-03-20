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

  button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #757575;
    color: #f5f5f5;
  }

  input {
    width: 100%;
    padding: 0.6rem 2.5rem 0.7rem 1rem;
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
export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  border-radius: 7px;
`;
