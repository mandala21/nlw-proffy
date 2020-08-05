import React from 'react';
import ZapIcon from "../../assets/icons/whatsapp.svg";

import './styles.css';

type ProffyListItemProps = {
    userName: string,
    userPhoto: string,
    price: string,
    subject: string,
}

const ProffyListItem: React.FC<ProffyListItemProps> = ({userName,userPhoto,price,subject}) => {
    return (
        <div className="proffy-item">
            <article>
                <div className="card-header">
                    <img src={userPhoto} />
                    <div className="name-container">
                        <strong>{userName}</strong>
                        <p>{subject}</p>
                    </div>
                </div>
                <div className="card-container">
                    <p>Apaixonado por número, quase uma calculadora com pernas.</p>
                    <br />
                    <p>Mais de 500 alunos ja aprenderam a calcular igual uma Casio FX-82MS.</p>
                </div>
                <div className="card-footer">
                    <p>Preço/hora <span className="price">{price}</span></p>
                    <a href="" className="btn-zap">
                        <img src={ZapIcon} />
                        Entrar em contato
                    </a>
                </div>
            </article>
        </div>
    );
}

export default ProffyListItem;  
