import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout.js";
import Login from "./components/users/login.js";
import All from "./components/allprducts/allproduct.js";
import Productss from "./components/Products/products.js";
import View from "./components/Products/view.js";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Login" element={<Login />} />
          <Route path="Products" element={<All />} />
          <Route path="View" element={<View />} />
          <Route path="pp" element ={<Productss/>} />
      </Routes>
    </div>
  );
}
export default App;
