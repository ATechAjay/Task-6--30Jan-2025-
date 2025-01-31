import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache:'no-store'
    //     next: { revalidate: 10 },
  });

  const users: User[] = await response.json();

  console.log(users);

  return (
    <>
      <h1 className="text-2xl bold">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
