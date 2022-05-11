import React from "react";
import { Table } from "react-bootstrap";
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    console.log(props);

    return (
        <><label>List</label><Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => <TodoItem item={todo} />)}
            </tbody>
        </Table></>
    )
}

export default TodoList;