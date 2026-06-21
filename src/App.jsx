import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-bone">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/fiction"
            element={
              <Layout>
                <CategoryPage
                  category="fiction"
                  title="Fiction"
                  description="Novels and stories from classic and contemporary writers."
                />
              </Layout>
            }
          />
          <Route
            path="/non-fiction"
            element={
              <Layout>
                <CategoryPage
                  category="non-fiction"
                  title="Non-Fiction"
                  description="History, essays, biography, and science books that explain the world."
                />
              </Layout>
            }
          />
          <Route
            path="/poetry"
            element={
              <Layout>
                <CategoryPage
                  category="poetry"
                  title="Poetry"
                  description="Collections of contemporary and classic poetry."
                />
              </Layout>
            }
          />
          <Route
            path="/art"
            element={
              <Layout>
                <CategoryPage
                  category="art"
                  title="Art & Design"
                  description="Design theory, monographs, architecture, and visual arts."
                />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
