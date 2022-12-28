import styles from "./App.module.css";
import {Title} from "./Components";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import logo from "./logo192.png";
import './index.css'


const Styles = () => {
    return (
        <div className={styles.App}>
            <Title theme="dark">{ process.env.NODE_ENV }</Title>
            <Bootstrap />
            <Tailwind />
            { process.env.NODE_ENV === 'development' && (
                <>
                    <img src="./logo512.png" alt=""/>
                    <img src={logo} alt=""/>
                </>
            ) }

        </div>
    )
}

export default Styles
