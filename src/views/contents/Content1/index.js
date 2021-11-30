import React from 'react';
import { useParams } from 'react-router-dom';

function Content1() {
  const { user } = useParams();

  return (
    <div>
      <h1>Conteúdo 1</h1>
      <h2>Usuário: {user}</h2>
    </div>
  );
}

export default Content1;
