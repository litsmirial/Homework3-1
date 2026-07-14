function ProductCard({ name, price, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-80 hover:scale-105 transition">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {name}
      </h2>

      <p className="text-gray-600 mb-3">
        {description}
      </p>

      <p className="text-green-600 font-bold text-lg">
        Price: {price} Toman
      </p>
    </div>
  );
}

export default ProductCard;