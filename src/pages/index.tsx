
import { Inter } from "next/font/google";
import useTranslation from "next-translate/useTranslation";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { t, lang } = useTranslation('post');
  console.log(t(`title`), lang)
  return (
    <main>
      asdfasd
    </main>
  );
}
