import { assets, menu_list } from "../../assets/assets";
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-section">
      <h1 className="orange-heading">Menu</h1>
      <div className="menu-list">
        {menu_list.map((menuItem, index) => (
          <div className="menu-item" key={index}>
            <img src={menuItem.menu_image} alt={menuItem.menu_name} className="menu-item-img" />
            <p>{menuItem.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
