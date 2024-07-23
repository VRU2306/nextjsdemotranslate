import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';


function Post() {
    const { t, lang } = useTranslation('post');
    console.log(t('title'),lang)
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Smaple</h1>
            <p>Smawe</p>
            <br />
            <p>Translated Title: {t('title')}</p>
            <p>Translated Content: {t('content')}</p>
            <p>Current Locale: {router.locale}</p>
        </div>
    );
}


export default Post;
