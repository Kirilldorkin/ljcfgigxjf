import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Select } from "@chakra-ui/react";
import { getAllUsers, updateUser, db } from "../../firebase/firebase";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getAllUsers();
        setUsers(userList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUser = async (userId, updatedData) => {
    try {
      await updateUser(userId, updatedData);
      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Email</Th>
          <Th>Username</Th>
          <Th>Role</Th>
          <Th>Player Level</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.email}</Td>
            <Td>{user.userName}</Td>
            <Td>
              <Select
                value={user.role}
                onChange={(e) => handleUpdateUser(user.id, { role: e.target.value })}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Select>
            </Td>
            <Td>
              <Select
                value={user.playerLevel}
                onChange={(e) => handleUpdateUser(user.id, { playerLevel: e.target.value })}
              >
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </Select>
            </Td>
            <Td>
              <Button colorScheme="blue" size="sm" onClick={() => handleUpdateUser(user.id, { role: "user", playerLevel: "first" })}>
                Reset
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UserList;
