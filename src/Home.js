 import './index.css'
import Header from "./Header";
import Footer from "./Footer";
import {useAuth} from "./context";
const Home = () => {
  const { user } = useAuth()
  return(
<>
    <Header />
    App
  {
    user &&  <div  style={{backgroundColor:'red'}}>Bu alan sadece login olduktan sonra gorebileceksiniz</div>
  }

    <Footer />
</>
  )
}

export default Home
