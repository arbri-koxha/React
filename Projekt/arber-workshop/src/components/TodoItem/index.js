import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";


const TodoItem = (props) => {
    const { item } = props;
    const { id, user, title, completed } = item;

    return (
        <tr style={{ backgroundColor: completed ? 'lightgreen' : '' }}>
            <td>{id}</td>
            <td>{user.name}</td>
            <td>{title}</td>
            <td><DropdownButton
                variant="outline-secondary"
                title="Do"
                id="input-group-dropdown-2"
                align="end"
            >
                <Dropdown.Item href="#">Update</Dropdown.Item>
                <Dropdown.Item href="#">Delete</Dropdown.Item>
            </DropdownButton></td>
        </tr>
    )
}

export default TodoItem;