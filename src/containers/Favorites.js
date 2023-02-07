import React from 'react'

import FavoriteItem from '../components/Favorites/FavoriteItem'
import './Products.css'
import { useStore } from '../hooks/store'

const Favorites = props => {
  const [state, dispatch] = useStore()
  const favorites = state.products.filter(p => p.isFavorite)

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
