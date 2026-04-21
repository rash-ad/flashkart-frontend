import React from "react";
import "./CategoryCards.css";

function CategoryCards() {
  const categories = [
    { name: "Electronics", img: "https://png.pngtree.com/png-vector/20240905/ourmid/pngtree-black-dslr-camera-with-large-lens-clipart-illustration-stock-photo-png-image_13758787.png" },
    { name: "Fashion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36bSzVRQmF1NlkFJwjguhUpwNa3uapZKSTg&s" },
    { name: "Groceries", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0V2VQaGF3D6FSdgEOn6cePxtrbXAXf5dLw&s" },
    { name: "Home Decor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJapr0mJO48YiXKPOeA9m2zyeQHQTaILGyQ&s" },
  ];

  return (
    <section className="category-section">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;