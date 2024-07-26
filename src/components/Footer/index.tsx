import "./style.css"
import { Phone, InstagramLogo, Mailbox } from "@phosphor-icons/react"

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="aboutUs">
                    <p className="poppins" style={{fontSize: 30, fontWeight: 480, paddingTop: 36, marginBottom: 0}}>Se interessou ?</p>
                    <p className="archivo-black" style={{fontSize: 70, marginTop:0}}>Entre em contato <span className="textBar">conosco</span></p>
                    <div className="contacts poppins">
                        <div className="contact">
                            <Phone size={60} color="#fff" className="icon" />
                            <p style={{fontSize: 30}}>92 98620-6811</p>
                        </div>
                        <div className="contact">
                            <InstagramLogo size={60} color="#fff" className="icon" />
                            <a href="https://www.instagram.com/equipe_nxs" target="_blank" rel="noopener noreferrer" style={{ fontSize: 30, padding: 0, textDecoration: 'none', color: "#BCD7FF" }}>
                            equipe_nxs
                            </a>
                        </div>
                        <div className="contact">
                            <Mailbox size={60} color="#fff" className="icon" />
                            <a href="mailto:nxsskill@gmail.com" style={{fontSize: 30, padding: 0, textDecoration: "none", color: "#BCD7FF"}}>
                                nxsskill@gmail.com
                            </a>
                        </div>
                    </div>
                    <button className="gradient-button inter">Solicitar serviço</button>
                </div>
                <div className="slogan">  
                    <p className="poppins" style={{fontSize:20, fontWeight:"bold"}}>A equipe que pode alavancar a sua empresa!</p>
                    <p className="archivo-black" style={{fontSize:50}}>Isso é Equipe-Nexus!</p>
                </div>
            </div>
        </footer>
    )
}