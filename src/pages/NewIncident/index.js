import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './styles.css';


const NewIncident = () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Quis dolore est nostrud minim occaecat tempor nisi.Ut eu est cillum .</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso" required/>
          <textarea placeholder="Descrição" required/>
          <input type="text" placeholder="Whatsapp" required/>
          <input type="text" placeholder="Valor em reais" required />
          <button className="btn" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident;