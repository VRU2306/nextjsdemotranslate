import { AppProps } from 'next/app';
import '../styles/globals.css'; // Example for global styles
import LanguageSwitcher from '@/app/components/languageSwithcer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <LanguageSwitcher />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;