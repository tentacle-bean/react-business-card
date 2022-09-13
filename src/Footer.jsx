import "./styles/Footer.css"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <a className="footer-link" href="#"><i className="fa-brands fa-square-twitter"></i></a>
                <a className="footer-link" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                <a className="footer-link" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                <a className="footer-link" href="#"><i className="fa-brands fa-square-github"></i></a>
            </div>
        </footer>
    )
}