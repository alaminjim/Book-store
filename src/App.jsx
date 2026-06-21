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
                  description="Immerse yourself in worlds crafted from imagination and truth. Our fiction collection spans literary novels, speculative futures, and intimate human portraits."
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
                  description="Ideas that challenge, inform, and reshape how you see the world. Essays, histories, and intellectual works from the most rigorous thinkers of our time."
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
                  description="Language distilled to its most essential form. A curated archive of contemporary and classical verse that speaks to the margins of human experience."
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
                  description="Monographs, design theory, and visual culture from the most influential artists, photographers, and designers of the last century."
                />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
