import React, { useContext } from 'react'

import FavoriteItem from '../components/Favorites/FavoriteItem'
import './Products.css'
import { ProductsContext } from '../context/products'

const Favorites = props => {
  const favorites = useContext(ProductsContext).products.filter(p => p.isFavorite)

  let content = <p className="placeholder">Got no favorites yet!</p>

  if (favorites.length > 0) {
    content = (
      <ul className="products-list">
        {favorites.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    )
  }
  return content
}

export default Favorites
