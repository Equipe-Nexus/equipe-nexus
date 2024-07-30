import { Card } from '../../../../components/CardMembers';
import './styles.css';

export function Section4() {
  return (
    <main>
      <div className="section-4">
        <div className="section4__top">
          <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>

        </div>
        <Card
          name='Nome Sobrenome'
          role='Programador/Designer'
          github='dada'
          behance='dada'
          instagram='dada'
        />
      </div>
    </main>
  );
}
