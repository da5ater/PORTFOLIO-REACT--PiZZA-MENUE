import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div>
      <Header  className="header" />
      <Menue />
      <Footer />
    </div>
  );
}




function Header () {
  return (
    <header className="header" style={{ color: 'red', textAlign: 'center', textTransform: 'uppercase' }}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer () {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '20px' }}>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry, we are closed. We open at 12:00.</p>
      )}
    </footer>
  )
}


function Order ({openHour, closeHour}) {
  return (
        <div className="order">
        <p>We are currently open until 22:00. Come visit us or order online.</p>
        <button className="btn"> Order </button>
        </div>
  )
}

function Menue () {
  const pizzas = pizzaData;
  return (

    pizzas.length > 0 ? (
    <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
         {pizzas.map((pizza) => (
          <Pizza key={pizza.name} {...pizza} />
      ))}
      </ul>
    </main>
    ) : (<p>We are still working on our menu. Please come back later </p>)
    
  )
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  if (soldOut) {
    return (
      <li className="pizza sold-out">
        <img src={photoName} alt={name} />
        <div className="pizza-details">
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price}€</span>
        </div>
      </li>
    );
  }
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div className="pizza-details">
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <span>{price}€</span>
      </div>
    </li>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

