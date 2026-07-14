import { Fragment } from "react";

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <Fragment key={user.id}>
          <div className="bg-white p-5 rounded-xl shadow-md mb-4">
            <h2 className="text-xl font-bold text-blue-600">
              {user.name}
            </h2>

            <p>Age: {user.age}</p>

            <p>City: {user.city}</p>
          </div>
        </Fragment>
      ))}
    </>
  );
}

export default UserList;