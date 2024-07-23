import useTranslation from "next-translate/useTranslation";
// import "@/i18n";
function Data() {
    const { t, lang } = useTranslation('post');
    console.log(t(`title`), lang)
    return <>
        <div>
            Data
        </div>
    </>
}
// export 
export default Data;