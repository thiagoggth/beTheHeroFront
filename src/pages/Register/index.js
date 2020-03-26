import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import './styles.css';



const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Quis dolore est nostrud minim occaecat tempor nisi.Ut eu est cillum .</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para login
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome da ONG" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Whatsapp" required />
          <div className="input-group">
            <input type="email" placeholder="Cidade" required />
            <input type="text" placeholder="UF" style={{ width: 80 }} required />
          </div>
          <button className="btn" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}


export default Register;