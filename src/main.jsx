import './index.css';
import { restaurants } from '../materials/mock.js';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(
  <div className='page'>
    <div className='container'>
      <div className='wrapper'>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className='card'>
            <h2 className='card__title'>{restaurant.name}</h2>
            <h3 className='card__subtitle'>Меню</h3>
            <ul className='menu'>
              {restaurant.menu.map((menuItem) => (
                <li className='menu__item' key={menuItem.id}>
                  <span className='menu__product'>
                    {menuItem.name} - {menuItem.price}$
                  </span>
                  <div className='menu__ingredients'>
                    {menuItem.ingredients.map((ingredient) => (
                      <span
                        className='menu__ingredient'
                        key={`${menuItem.id}-${ingredient}`}
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <h3 className='card__subtitle'>Отзывы</h3>
            <ul className='reviews'>
              {restaurant.reviews.map((review) => (
                <li className='reviews__item' key={review.id}>
                  <span className='reviews__user'>{review.user}</span>
                  <div className='rating'>
                    {[...Array(review.rating)].map((_, index) => (
                      <span
                        className='rating__star'
                        key={`${review.id}-star-${index}`}
                      >
                        ⭐️
                      </span>
                    ))}
                    <span className='rating__count'>({review.rating})</span>
                  </div>
                  <span className='reviews__text'>{review.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);
