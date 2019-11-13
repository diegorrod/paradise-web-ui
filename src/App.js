import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { NavMenu, NavMenuItem } from "./components/navMenu";
import logo from "./logo.svg";
import "./App.css";
import "./components/fontawesome/css/all.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <NavMenu logo={logo}>
            <NavMenuItem icon="home" to="/" exact />
            <NavMenuItem icon="concierge-bell" to="/hospedajes" />
            <NavMenuItem icon="receipt" to="/facturacion" />
            <NavMenuItem icon="utensils-alt" to="/gastronomia" />
            <NavMenuItem icon="cash-register" to="/cajas" />
            <NavMenuItem icon="piggy-bank" to="/bancos" />
            <NavMenuItem icon="phone-rotary" to="/telefono" />
            <NavMenuItem icon="file-invoice-dollar" to="/deudores" />
            <NavMenuItem icon="inventory" to="/inventario" />
            <NavMenuItem icon="database" to="/datos-basicos" />
            <NavMenuItem icon="sliders-v-square" to="/mantenimiento" />
          </NavMenu>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
