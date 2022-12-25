import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { usersList, usersListConfig } from "./components/backend/ListUsers";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Category from "./components/category/Category";
import CategoryById from "./components/category/CategoryById";
import CategoryDetail from "./components/category/CategoryDetail";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import { Home } from "./components/home/Home";
import { Whatsapp } from "./components/whatsapp/Whatsapp";
import AboutUS from "./components/aboutUS/AboutUS";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Post from "./components/blog/Post";

const App = () => {
  return (
    <>
      <BrowserRouter>
       <div className="container-fluid padre">
        <div  className="row hijo">
        <NavBar usersList={usersList} profile={usersListConfig} />
        <Routes>
          {/* <Route
            path=""
            element={<NavBar usersList={usersList} profile={usersListConfig} />}
          /> */}
          {/* <Route
            path=""
            element={<ItemListContainer usersList={usersList} />}
          /> */}
          <Route path="" element={<Home />} />
          <Route path="/nosotros" element={<AboutUS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post" element={<Post />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<CategoryById />} />
          <Route path="/item/:id" element={<CategoryDetail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </div>
       </div>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
