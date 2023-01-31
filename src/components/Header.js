import {memo} from 'react'
const Header = () => {
    console.log('Header rendered')
    return(
        <header>Header</header>
    )
}
export default memo(Header)
