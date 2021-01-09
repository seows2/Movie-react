import React, { useState } from 'react';
import { Wrapper } from '../../styles/variables';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import * as S from './Header.style';

const MenuButton = ({ onClickMenu, open }) => {
  return (
    <S.MenuButton
      open={open}
      onClick={onClickMenu}
      type="button"
      aria-label="메뉴"
    >
      <div />
      <div />
      <div />
    </S.MenuButton>
  );
};

const Header = ({ color }) => {
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery({ query: 'min-width: 768px' });

  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <Wrapper>
        <S.Position>
          <S.Container open={open} color={color}>
            <S.LogoButton type="button" open={open}>
              movie
            </S.LogoButton>
            <S.MenuContainer>
              <S.IconButton type="button" aria-label="검색버튼" open={open}>
                <S.SearchIcon />
              </S.IconButton>
              <MenuButton open={open} onClickMenu={onClickMenu} />
            </S.MenuContainer>
          </S.Container>
        </S.Position>
      </Wrapper>
    </header>
  );
};

Header.prototype = {
  color: PropTypes.string.isRequired,
};

export default Header;
