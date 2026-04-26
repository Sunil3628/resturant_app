import React, { useState } from 'react';
import '../Style.css';
import Menu from '../../menuApi.js';


const Resturent = () => {
  const [menudata, setMenuData] = useState(Menu);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Lunch', value: 'lunch' },
    { label: 'Evening', value: 'evening' },
    { label: 'Dinner', value: 'dinner' },
    { label: 'All', value: 'all' },
  ];

  const filterItem = (category) => {
    setActiveCategory(category);

    if (category === 'all') {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter(
      (curElem) => curElem.category.toLowerCase() === category.toLowerCase()
    );
    setMenuData(updatedList);
  };

  return (
    <>
        <nav className="navbar">
          <div className="btn-group">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`btn-group__item ${
                  activeCategory === category.value ? 'btn-group__item--active' : ' '
                }`}
                onClick={() => filterItem(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>


      <section className="main-card--container">
        {menudata.length === 0 && (
          <p className="empty-state">No items available in this category.</p>
        )}
        {menudata.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt={name} className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Resturent;