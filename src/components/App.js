
import React from "react";
import './../styles/App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';
import AddProduct from './AddProduct';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
const App = () => {
    const [mobiles, setMobiles] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      description:
        "Apple flagship smartphone with A17 Pro chip, titanium body, and advanced camera system.",
      price: 134999,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      description:
        "Premium Android smartphone with Snapdragon processor, S-Pen support, and 200MP camera.",
      price: 129999,
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    },
    {
      id: 3,
      name: "OnePlus 12",
      description:
        "High-performance smartphone featuring AMOLED display, fast charging, and smooth UI experience.",
      price: 64999,
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    },
    {
      id: 4,
      name: "Google Pixel 8",
      description:
        "Google smartphone with AI-powered camera features and clean Android experience.",
      price: 75999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 5,
      name: "Xiaomi 14 Pro",
      description:
        "Powerful smartphone with Leica cameras, Snapdragon chipset, and ultra-fast charging.",
      price: 69999,
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
    },
    {
      id: 6,
      name: "Realme GT 6",
      description:
        "Gaming-focused smartphone with high refresh rate display and powerful battery backup.",
      price: 42999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 7,
      name: "Nothing Phone 2",
      description:
        "Unique transparent design smartphone with Glyph lighting interface and smooth Android UI.",
      price: 44999,
      image:
        "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500",
    },
    {
      id: 8,
      name: "Moto Edge 50 Pro",
      description:
        "Stylish Motorola smartphone featuring curved display, fast charging, and premium cameras.",
      price: 37999,
      image:
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500",
    },
  ]);
  return (
    <div>
        {/* Do not remove the main div */}
        <BrowserRouter >
          <div style={{height:"100px",width:"100%",border: '1px solid black', display: "flex", alignItems: "center", justifyContent: 'center', gap:20}}>
            <Link to={`/`}>home</Link>
            <Link to={`/admin`}>Admin</Link>
          </div>
          <Routes>
            <Route path={`/admin`} element={<AdminPanel mobiles={mobiles} />}></Route>
            <Route path={`/`} element={<ProductList mobiles={mobiles} />}></Route>
            <Route path={`/products/:id`} element={<ProductDetails mobiles={mobiles} />}></Route>
            <Route path={`/admin/products/:id`} element={<AddProduct mobiles={mobiles} setMobiles={setMobiles} />}></Route>
            <Route path={`/admin/addProduct`} element={<AddProduct mobiles={mobiles} setMobiles={setMobiles} />}></Route>
    
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
