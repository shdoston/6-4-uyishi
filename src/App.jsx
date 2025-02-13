import "./App.css";
import { useState } from "react";

// componets
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userlist/UserList";
import NewUserFrom from "./components/newuser/NewUserForm";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // close modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") setshowModal(false);
    if (e.key === "Escape") setshowModal(false);
  };

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setshowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserFrom addUser={addUser} />}
      <button onClick={() => setshowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
