import React from 'react';
import ReactDOM from 'react-dom/client';


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
      <Header />
      <Menue />
      <Footer />
    </div>
  );
}


function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza Margherita" />
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
      <span>10€</span>
    </div>
  );
}


function Header () {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer () {
  return (
    <footer className="footer">
      <p> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}  We are currently open until 22:00. Come visit us or order online.</p>
    </footer>
  )
}

function Menue () {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

