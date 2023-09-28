import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import SimilarProvider from "./contexts/SimilarProdContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <SimilarProvider>
          <App />
        </SimilarProvider>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
