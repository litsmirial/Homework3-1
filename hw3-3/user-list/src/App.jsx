import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      name: "Ali",
      age: 22,
      city: "Tehran",
    },
    {
      id: 2,
      name: "Sara",
      age: 25,
      city: "Shiraz",
    },
    {
      id: 3,
      name: "Amir",
      age: 21,
      city: "Tabriz",
    },
    {
      id: 4,
      name: "Nika",
      age: 24,
      city: "Mashhad",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        User List
      </h1>

      <div className="max-w-lg mx-auto">
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;