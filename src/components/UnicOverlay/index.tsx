import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../model/useWrapperScroll'
import { Container, Header, Logo, Burger, Footer } from './styles';

const UnicOverlay: React.FC = () => {
  const { scrollyProgress } = useWrapperScroll()

  const opacity = useTransform(scrollyProgress, [0.9, 1], [0,1])
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{opacity}}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Lucas Damas</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UnicOverlay;
