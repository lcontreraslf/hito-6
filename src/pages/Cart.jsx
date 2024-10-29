import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, incrementaCantidad, disminuyeCantidad, eliminarDelCarrito, totalCompra } = useCart();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="cart text-center p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2>Carrito de Compras</h2>
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-pizza d-flex align-items-center mb-3 p-2 border rounded">
            <img src={pizza.img} alt={pizza.name} width="100" className="me-3" />
            <div>
              <h3>{pizza.name}</h3>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.count}</p>
              <button onClick={() => incrementaCantidad(pizza.id)} className="btn btn-primary me-2">+</button>
              <button onClick={() => disminuyeCantidad(pizza.id)} className="btn btn-secondary me-2">-</button>
              <button onClick={() => eliminarDelCarrito(pizza.id)} className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        ))}
        <h3>Total: ${totalCompra.toLocaleString()}</h3>
      </div>
    </div>
  );
}

export default Cart;
