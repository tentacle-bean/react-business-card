import Info from "./Info.jsx"
import About from "./About.jsx"
import Interests from "./Interests.jsx"
import Footer from "./Footer.jsx"

export default function App(){
    return(
        <div className="body-container">
            <Info/>
            <main className="main-container">
                <About/>
                <Interests/>
            </main>
            <Footer/>
        </div>
    )
}