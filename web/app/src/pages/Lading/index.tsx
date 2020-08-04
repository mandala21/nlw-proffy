import React, { FC } from "react";

import "./styles.css";
import Brand from "../../assets/images/logo.svg";
import Landing from "../../assets/images/landing.svg";
import ClassroomIcon from "../../assets/icons/give-classes.svg";
import StudyIcon from "../../assets/icons/study.svg";
import HeartIcon from "../../assets/icons/purple-heart.svg";

const Lading: FC = () => {
    return (
        <div className="page-lading">
            <div className="container">
                <div className="logo-container">
                    <img src={Brand} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={Landing} className="hero" />
                <div className="button-container">
                    <a className="btn study" href="#">
                        <img src={StudyIcon} /> Estudar
                    </a>
                    <a className="btn classroom" href="#">
                        <img src={ClassroomIcon} /> Dar Aulas
                    </a>
                </div>
                <span className="total-container">Total de 280 conexões feitas <img src={HeartIcon} alt="conexões" /></span>
            </div>
        </div>
    );
}

export default Lading;
