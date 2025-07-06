import React from 'react';
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <img src="/assets/logo.png" alt="Dino Music" />
      <button>Connect Dino Music</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* ✅ Fixed */
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #F3ECD9;
  gap: 2rem;

  img {
    height: 40vh;
    width: 40vh;
    object-fit: contain;
  }

  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: white;
    color: black;
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ddd;
    }
  }
`;