
import { MainContainer } from "./MainContainer"
import { Header } from "./navbar/Header"

  function Home(){

    const page= true;

    return(
        <div>
            <p>this is my home page</p>
            {<Header/>}
            {<MainContainer/>}
            {page ? <Header/>:<MainContainer/>}
            
        </div>
    )
}
// export default Home;

export{Home}
