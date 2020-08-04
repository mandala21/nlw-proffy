import React from 'react';
import PageHeader from '../../components/PageHeader';
import "./styles.css";
import { RD } from '../../routes';

const ProffysList: React.FC = () => {
  return (
      <div id="page-proffys" className="container">
        <PageHeader title="Estes são os proffys disponíveis" back={RD.lading.link}>
          <form id="filter-proffys">
            <div className="input-group">
              <label htmlFor="subject">Matéria</label>
              <input id="subject"/>
            </div>
            <div className="input-group">
              <label htmlFor="week-day">Dia da semana</label>
              <input id="week-day"/>
            </div>
            <div className="input-group">
              <label htmlFor="hour">Horário</label>
              <input id="hour"/>
            </div>
          </form>
        </PageHeader>
      </div>
  );
}

export default ProffysList; 
