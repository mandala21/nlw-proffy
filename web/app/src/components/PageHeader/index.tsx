import React from 'react';
import BackIcon from "../../assets/icons/back.svg";
import LogoImg from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';
import { RD } from "../../routes";
import "./styles.css";

type PageHeaderProps = {
  title: string
  back: string
}

const PageHeader: React.FC<PageHeaderProps> = ({title, back, children}) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
        <Link to={back}>
            <img src={BackIcon} alt="Voltar" className="back-icon" />
        </Link>
        <img src={LogoImg} className="logo" alt="Proffy - Plataforma de ensino" />
        </div>
        <div className="title-container">
        <h2>{title}</h2>
        {children}
        </div>
    </header>
  );
}

export default PageHeader;