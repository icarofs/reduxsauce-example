import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteActions } from '../../store/modules/favorites/favoritesDucks';

export default function Home() {
  const [repositoryInput, setRepositoryInput] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  function handleInputChange(e) {
    setRepositoryInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(FavoriteActions.favoriteRequest(repositoryInput));
    setRepositoryInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="usuário/repositório"
          value={repositoryInput}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
        {favorites.loading && <span> Carregando...</span>}
        {!!favorites.error && (
          <span style={{ color: '#f00' }}> {favorites.error}</span>
        )}
      </form>

      <ul>
        {favorites &&
          favorites.data.map((favorite) => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> {favorite.description}
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
      </ul>
    </>
  );
}
