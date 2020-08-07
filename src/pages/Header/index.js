import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const favorites = useSelector((state) => state.favorites);
  return <p>Você tem {favorites.data.length} favoritos.</p>;
}
