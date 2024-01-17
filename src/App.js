import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeFromCart(book) {
    setCart(cart.filter((item) => item.id !== book.id));
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: quantity,
            }
          : item;
      })
    );
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {}, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
