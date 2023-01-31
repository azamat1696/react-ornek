 import {useSite} from "./context/SiteContext";
export default function SwitchLanguage() {
const { language, dispatch } = useSite()
  const  switchLanguage = () => {
      dispatch({
          type:'CHANGE_LANG',
          value: language === 'tr' ? 'en':'tr'
      })
    }

    return(
        <>
        Mevcut Dil = {language}
        <button onClick={() => switchLanguage()}>Dil Degistir</button>
        </>
    )
}
