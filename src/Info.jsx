import './styles/Info.css'
import pig from "./assets/2369.png"

export default function Info(){
    return(
        <header className="info">
            <div className="info-container">  
                <h1 className="info-name">Albert</h1>
                <p className="info-profession">Frontend Developer</p>
                <img className="info-profile_pic" src={pig} alt="a picture of Albert"></img>
                <div className="info-btn-container">
                    <a href="#" className="info-btn info-btn-email">
                        <i class="fa-solid fa-envelope"></i>
                        Email
                    </a>
                    <a href="#" className="info-btn info-btn-li">
                        <i class="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                </div>
            </div>
            
        </header>
    )
}