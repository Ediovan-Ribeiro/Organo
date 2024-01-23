import './Footer.css'
import facebookLogo from './fb.png'
import instaLogo from './ig.png'
import twLogo from './tw.png'
import logo from './logo.png'
const Footer = (props) => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src={facebookLogo} alt="Logo Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src={twLogo} alt="Logo Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com/ediovanribeiro" target="_blank">
                            <img src={instaLogo} alt="Logo Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo} alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Ediovan Ribeiro na Alura.
                </p>
            </section>
        </footer>
    )
}

export default Footer;