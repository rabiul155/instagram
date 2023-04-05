import ContextProvider from '@/context/ContextProvider';
import MainLayout from '@/layout/MainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {


  return (
    <ContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ContextProvider>
  );

}
