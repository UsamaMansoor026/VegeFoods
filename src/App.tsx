import { Route, Routes } from "react-router-dom";
import { About, Cart, Contact, Home, Shop } from "./pages";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
