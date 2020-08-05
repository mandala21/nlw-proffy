import React from 'react';
import PageHeader from '../../components/PageHeader';
import "./styles.css";
import { RD } from '../../routes';
import ProffyListItem from "../../components/ProffyListItem";
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
        <main>
          <ProffyListItem 
            userName="Lucas Resende"
            userPhoto="https://avatars2.githubusercontent.com/u/20716489?s=460&u=2ad4f08acd7ecc98bb0740a4205e41ee9abf8dec&v=4"
            price="R$ 25,00"
            subject="Matemática" />
          <ProffyListItem 
            userName="Joao Silva"
            userPhoto="https://avatars2.githubusercontent.com/u/20716489?s=460&u=2ad4f08acd7ecc98bb0740a4205e41ee9abf8dec&v=4"
            price="R$ 50,00" 
            subject="História"/>
        </main>
      </div>
  );
}

export default ProffysList; 
