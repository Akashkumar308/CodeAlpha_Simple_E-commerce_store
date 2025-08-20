
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartView from './pages/CartView';

const App: React.FC = () => {
    return (
        <CartProvider>
            <HashRouter>
                <div className="flex flex-col min-h-screen font-sans text-gray-800">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<CartView />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        </CartProvider>
    );
};

export default App;
