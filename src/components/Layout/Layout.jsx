import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Container } from './Layout.styled';

import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <Container>
      <Toaster />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </Container>
  );
};
