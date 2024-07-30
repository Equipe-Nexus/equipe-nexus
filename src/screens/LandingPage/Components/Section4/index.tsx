import { Card } from '../../../../components/CardMembers';
import './styles.css';


export function Section4() {
  return (
    <div className="section-4">
      <div className="section4__top">
        <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>
      </div>
      <div className='teste'>
        <Card name='Nome Sobrenome 1' role='Programador/Designer' github='dada' behance='dada' instagram='dada' />
        <Card name='Nome Sobrenome 1' role='Programador/Designer' github='dada' behance='dada' instagram='dada' />
        <Card name='Nome Sobrenome 1' role='Programador/Designer' github='dada' behance='dada' instagram='dada' />
      </div>
    </div>
  );
}
