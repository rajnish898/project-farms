export default function CartDrawer({ cart, openCart, setOpenCart }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform ${openCart ? "translate-x-0" : "translate-x-full"} transition-transform`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={() => setOpenCart(false)}>X</button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-full">
        {cart.length === 0 ? (
          <p>No items added</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={item.img} className="h-12 w-12 object-cover rounded" />
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}