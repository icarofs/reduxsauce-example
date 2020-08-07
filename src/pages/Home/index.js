import React from 'react';

export default function Home() {
  return (
    <>
      <form onSubmit={() => {}}>
        <input placeholder="usuário/repositório" />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        <li key={{}}>
          <p>
            <strong>name</strong> description
          </p>
          <a href="##">Acessar</a>
        </li>
      </ul>
    </>
  );
}
