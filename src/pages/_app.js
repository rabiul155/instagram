import ContextProvider from '@/context/ContextProvider';
import MainLayout from '@/layout/MainLayout'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {


  return (

    <ContextProvider>
      <MainLayout>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Component {...pageProps} />
      </MainLayout>
    </ContextProvider>

  );


}

