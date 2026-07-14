function App() {
  const showValue = () => {
    const input = document.getElementById("myInput");
    console.log(input.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-sky-50 to-purple-100">
      <div className="bg-white w-[380px] p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-sky-600 mb-2">
          Text Logger
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Type something and click the button
        </p>

        <input
          id="myInput"
          type="text"
          placeholder="Write something..."
          className="w-full p-3 border-2 border-sky-200 rounded-xl focus:outline-none focus:border-sky-500 mb-5"
        />

        <button
          onClick={showValue}
          className="w-full bg-sky-500 text-white font-semibold py-3 rounded-xl hover:bg-sky-600 duration-300"
        >
          Log to Console
        </button>
      </div>
    </div>
  );
}

export default App;