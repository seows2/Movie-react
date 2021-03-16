import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: url("https://www.themoviedb.org/t/p/w1280/1n5q3XpEhCe7TnGHzsHs5pwVT8O.jpg") center no-repeat;
    background-size: cover;
    height: 100vh;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        opacity: 0.3;
      }
`

export { Container }