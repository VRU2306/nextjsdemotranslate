// app/components/LanguageSwitcher.tsx
"use client"
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

function LanguageSwitcher() {
    const router = useRouter();
    const { t } = useTranslation();

    const changeLanguage = (locale: string) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>{t('common.english')}</button>
            <button onClick={() => changeLanguage('zh')}>{t('common.chinese')}</button>
            <button onClick={() => changeLanguage('id')}>{t('common.indonesian')}</button>
        </div>
    );
};

export default LanguageSwitcher;
