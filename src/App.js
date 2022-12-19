import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { usersList, usersListConfig } from "./components/backend/ListUsers";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Category from "./components/category/Category";
import CategoryDetail from "./components/category/CategoryDetail";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar usersList={usersList} profile={usersListConfig} />
        <Routes>
          {/* <Route
            path=""
            element={<NavBar usersList={usersList} profile={usersListConfig} />}
          /> */}
          <Route
            path=""
            element={<ItemListContainer usersList={usersList} />}
          />
          <Route path="/category" element={<CategoryDetail />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/item/:id" element={<CategoryDetail />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
