import ProductCard from "./components/ProductCard";

function App() {

  const products = [
    {
      id: 1,
      name: "React Programming Book",
      price: "850,000",
      description:
        "An educational book for learning React and building practical projects"
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: "3,500,000",
      description:
        "A professional keyboard with backlight suitable for programming and gaming"
    },
    {
      id: 3,
      name: "24-inch Monitor",
      price: "7,200,000",
      description:
        "A high-quality monitor suitable for graphic design and daily tasks"
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: "950,000",
      description:
        "A lightweight and comfortable wireless mouse with easy connection"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>


      <div className="flex flex-wrap justify-center gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}

      </div>

    </div>
  );
}

export default App;