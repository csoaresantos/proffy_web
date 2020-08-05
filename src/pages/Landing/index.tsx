import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landImg from '../../assets/images/landing.svg';
import stydyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import paperHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

function Landing() {
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Plataform de estudos online</h2>
            </div>
            <img src={landImg} alt="Plataforma de estudo" className="hero-image" />

            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={stydyIcon} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Lecionar"/>
                    Lecionar
                </Link>
            </div>

            <span className="total-connections">
                Total de 200 conexões realizadas <img src={paperHeartIcon} alt="Coração roxo"/>
            </span>
        </div>
    </div>
    )
}

export default Landing;