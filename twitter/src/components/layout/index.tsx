import React from "react";

import Main from '../Main';

import { Container, Wrapper } from './styles.ts'

export default function Layout(){
  return (
    <>
      <Container>
        <Wrapper>
          {/* <MenuBar/> */}
            <Main></Main>
            {/* <SideBar/> */}
        </Wrapper>
      </Container>
    </>
  );
}
