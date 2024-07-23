import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage'
function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="flex flex-col">
      <button onClick={() => changeLanguage('en')} key="en">
        English
      </button>
      <button onClick={() => changeLanguage('zh')} key="zh">
        中文
      </button>
      <button onClick={() => changeLanguage('id')} key="id">
        Bahasa Indonesia
      </button>
    </div>
  );
}

export default LanguageSwitcher;
