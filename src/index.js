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
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
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
  return (
    <footer className="footer" style={{ textAlign: 'center', padding: '20px' }}>
      <p> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  We are currently open until 22:00. Come visit us or order online.</p>
    </footer>
  )
}

function Menue () {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza  name="Focaccia" ingredients="Bread with italian olive oil and rosemary" price={6} />
    </main>
  )
}

function Pizza({ name, ingredients, price }) {
  return (
    <div className="pizza">
      <img src={`/pizzas/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`} alt={name} />
      <div className="pizza-details">
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <span>{price}€</span>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

