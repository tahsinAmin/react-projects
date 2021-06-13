import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items)
    }else{
      const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }

  }
  console.log(items);
  return (
    <main>
      <section className="menu section">
        <div className="tite">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
