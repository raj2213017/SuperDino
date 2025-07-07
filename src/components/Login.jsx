import React from 'react';
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "a7b5e9ee81d04b74aa7d62f50f1f7b39";
    const redirectUrl = "http://127.0.0.1:3000/callback"; 
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const scope = [ 
         "user-read-email",
         "user-read-private",
         "user-read-playback-state",
         "user-modify-playback-state",
         "user-read-currently-playing",
         "user-read-playback-position",
         "user-top-read",
         "user-read-recently-played",

    ].join(" ");

    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
  redirectUrl
)}&scope=${encodeURIComponent(scope)}&response_type=code&show_dialog=true`;

    // Redirect to login
    window.location.href = url;
  };

  return (
    <Container>
      <img src="/assets/logo.png" alt="Dino Music" />
      <button onClick={handleClick}>Connect Dino Music</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
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
