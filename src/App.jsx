import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { NavBar } from "./components/layout/NavBar";
import { Cart, Item } from "./components/common";
import styles from "./app.module.css"; 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}> 
          <div> 
            <h1 className={`${styles.Titulo} ${styles.FZT}`}>Bienvenidos a Dulces Mimos</h1> 
            
            <h2 className={`${styles.Titulo} ${styles.FZT}`}>Petshop</h2>
          </div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
