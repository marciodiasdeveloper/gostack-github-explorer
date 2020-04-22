import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  return (
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          alt="Márcio Dias"
          src="https://avatars3.githubusercontent.com/u/75541?s=460&u=0d4944f37385b4904b096c050a50b53ae9e75ca1&v=4"
        />
        <div>
          <strong>marciodiasdeveloper/portfolio</strong>
          <p>description</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  );
};

export default Dashboard;
