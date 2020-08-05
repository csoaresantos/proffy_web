import React from 'react';
import './styles.css';
import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/1048163?s=400&u=c40f9e944f60e1cd0201767476a3337b23e76c7c&v=4" alt="Csoares" />
                <div>
                    <strong>Charles Soares</strong>
                    <span>Lógica de programação</span>
                </div>
            </header>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <footer>
                <p>Preço/hora<strong>R$ 42,00</strong></p>
                
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;