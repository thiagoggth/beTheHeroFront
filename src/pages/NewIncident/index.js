import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';


const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  const handleNewIncident = e => {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {

      api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })
        .then(
          () => history.push('/profile')
        )

    } catch (err) {
      alert('Erro ao cadastrar novo caso, tente novamente.')
    }

  }

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

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Título do caso"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            required
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="btn" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewIncident;