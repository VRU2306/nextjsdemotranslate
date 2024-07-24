import Head from 'next/head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

function Post() {
    const { t, lang } = useTranslation('post');
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <div>
                <h1>Normal Page</h1>
                <p>{router.query.slug}</p>
                <br />
                <p>Translated Title: {t('title')}</p>
                <p>Translated Content: {t('content')}</p>
                <p>Current Locale: {router.locale}</p>
            </div>
        </>
    );
}

export default Post;
