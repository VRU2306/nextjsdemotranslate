import useTranslation from "next-translate/useTranslation";
function Data() {
    const { t, lang } = useTranslation('post');
    console.log(t(`title`), lang)
    return <>
        <div>
            Data
        </div>
    </>
}
export default Data;