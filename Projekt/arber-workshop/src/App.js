import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/layouts/header';
import Search from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const usersReq = await axios.get('https://jsonplaceholder.typicode.com/users');
    const todosReq = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // const mapTodos = todosReq.data.map(todo => {
    //   return {
    //     ...todo,
    //     user: usersReq.data.find(usr => usr.id === todo.userId)
    //   }
    // });

    setUsers(usersReq.data);
    setTodos(todosReq.data);
    // setUserTodos(mapTodos);
    setUserTodos(mapTodos(todosReq.data, usersReq.data));
  }

  function mapTodos(todos, users) {
    return todos.map(t => {
      return {
        ...t,
        user: users.find(u => u.id === t.userId)
      }
    });
  }

  function filteredTodos() {
    return userTodos.filter(t => {
      return (!selectedUser || t.userId === selectedUser) && (!search || t.title.toLowerCase().includes(search.toLowerCase()))
    })
  }

  const createTodos = (userId, title, completed) => {
    setUserTodos(userTodos.concat([{
      userId,
      title,
      completed,
      id: userTodos.length + 1,
      user: users.find(u => u.id === userId)
    }]));
  }

  function toggleComplete(id) {
    setUserTodos(userTodos.map(u => {
      if (u.id !== id) return u;

      return {
        ...u,
        completed: !u.completed
      }
    }))
  }


  return (
    <div className="App">
      <Header />
      <Search
        users={users}
        selectedUser={selectedUser}
        onSelectUser={(userId) => setSelectedUser(userId)}
        search={search}
        onChangeSearch={s => setSearch(s)}
      />
      <TodoList
        todos={filteredTodos()}
        markComplete={toggleComplete}

      />
    </div>
  );
}

export default App;
