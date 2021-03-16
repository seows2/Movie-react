import styled, { css } from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

const Position = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: fixed;
  width: 90vw;
  z-index: 5;
  display: flex;
  justify-content: ${({ open }) => (open ? 'flex-end' : 'space-between')};
  padding: 1rem 0;
  color: ${({ color }) => color};
`;

const LogoButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
  display: ${({ open }) => (open ? 'none' : 'block')};
`;

const IconButton = styled.button`
  color: inherit;
  margin-right: 1rem;
  display: ${({ open }) => (open ? 'none' : 'block')};
  @media (min-width: 768px) {
    margin-right: calc(1rem + 1rem);
  }
  &:last-child {
    margin-right: 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const iconStyle = css`
  font-size: 1.5rem;
  stroke-width: 0.7rem;
`;

const SearchIcon = styled(IoIosSearch)`
  ${iconStyle}
`;

const MenuButton = styled.button`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'black' : 'red')};
    transition: all 0.2s ease;

    &:first-child {
      width: ${({ open }) => (open ? '2.5rem' : '1.3rem')};
      transform: ${({ open }) => (open ? 'translateY(10px) rotate(50deg)' : 'translateX(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      width: ${({ open }) => (open ? '2.5rem' : '1.3rem')};
      transform: ${({ open }) => (open ? 'translateY(-10px) rotate(-50deg)' : 'translateX(0)')};
      margin-left: auto;
    }
  }
`;

export {
  Position,
  Container,
  LogoButton,
  IconButton,
  MenuContainer,
  SearchIcon,
  MenuButton,
};
