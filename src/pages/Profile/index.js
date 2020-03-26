import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './styles.css';


const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link className="btn" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>caso de teste</p>

          <strong>Descricão:</strong>
          <p>descrição de teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso de teste</p>

          <strong>Descricão:</strong>
          <p>descrição de teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso de teste</p>

          <strong>Descricão:</strong>
          <p>descrição de teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>caso de teste</p>

          <strong>Descricão:</strong>
          <p>descrição de teste</p>

          <strong>Valor:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="a8a8b3" />
          </button>
        </li>
      </ul>
    </div >
  )
}

export default Profile;