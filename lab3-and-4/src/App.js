import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products/Products";
import ProductDetails from "./Components/Pages/Products/ProductDetails";
import AddProduct from "./Components/Pages/Products/AddProduct";
import NotFound from "./Components/Pages/NotFound";
import { ProductsContextProvider } from "./ContextAPIs/ProductsContext.jsx";
import Recipes from "./Components/Pages/Recipes/Recipes";
import RecipeDetails from "./Components/Pages/Recipes/RecipeDetails";
import AddRecipe from "./Components/Pages/Recipes/AddRecipe";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ProductsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products/" element={<Products />}></Route>
              <Route path="/products/:id" element={<ProductDetails />}></Route>
              <Route path="/products/add" element={<AddProduct />}></Route>
              <Route path="/products/:id/edit" element={<AddProduct />}></Route>
              <Route path="/recipes/" element={<Recipes />}></Route>
              <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
              <Route path="/recipes/add" element={<AddRecipe />}></Route>
              <Route path="/recipes/:id/edit" element={<AddRecipe />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </ProductsContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
