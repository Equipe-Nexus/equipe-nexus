import './styles.css';
import NexusCell from '../../assets/NexusCell.png';
import Ellipse from '../../assets/ellipse.png';

export function LandingPage() {
    return (
        <main>
            <section className="section1">
                <div className="overlay">
                    <div className='sec-1__title'>
                        <h1 className="section-1__title">Equipe-Nexus</h1>
                    </div>
                    <div className='sec-1__subtitle'>
                        <p className="section-1__subtitle">A equipe que pode alavancar o seu negócio!</p>
                    </div>
                    <button className="btn-services">Ver serviços</button>
                </div>
            </section>
            <section className="section2">
                <div className="chat-bubble left">
                    <p>O que é a equipe Nexus?</p>
                </div>
                <div className="chat-bubble right">
                    <p>Nós somos uma soft house!</p>
                </div>
            </section>
            <section className="section4">
                <div className='content'>
                    <div className='section4__texts'>
                        <h1 className="section4__title">Mas você sabe o que é{<br />} uma Soft-house?</h1>
                        <div className="section4__content">
                            <div className="section4__text">
                                <p>Uma <strong>softhouse</strong> é uma empresa especializada no desenvolvimento de software. Essas empresas podem se dedicar a diversas atividades relacionadas à criação de programas de computador, como a concepção, o design, a programação, o teste, a manutenção e a atualização de software.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section4__image-container">
                        <img src={Ellipse} alt="Ellipse" className="section4__ellipse" />
                        <img src={NexusCell} alt="Nexus Cell" className="section4__image" />
                    </div>
                </div>
            </section>

            <section className="section-3">
                <h1 className="section-3__title">Com a nossa equipe você pode impulsionar a sua empresa!</h1>
                <div className='section-3__subtiltes__and__images'>
                    <p className='section-3__subtitle'>Temos uma equipe de desenvolvedores de todas as áreas</p>
                    <div className='section-3__images__section'>
                        <div className='section-3__images__section__1'></div>
                        <div className='section-3__images__section__2'></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
