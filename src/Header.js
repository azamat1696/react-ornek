import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import {useAuth} from "./context";
import button from "./components/Button";

const Header = () => {

    const { user, dispatch } = useAuth()
    const loginHandle = () => {
        dispatch({
            type: 'LOGIN',
            value: { name : 'Azamat',id:1}
        })
    }
    const logoutHandle = () => {
        dispatch({
            type: 'LOGOUT',
            value: false
        })
    }
    return(
        <header>
            Header <br/>
            {user && <button onClick={logoutHandle}>Cikis yap</button> || <button onClick={loginHandle}>Giris yap</button>}
            <hr/>
            <br/>
            <SwitchTheme /><br/>
             <SwitchLanguage   />
        </header>
    )
}
export default Header
