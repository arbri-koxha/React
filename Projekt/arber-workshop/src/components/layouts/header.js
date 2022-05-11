import React from "react";
import styles from "./style.module.css"
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";

const Header = props => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={styles.Header}>
            <h1>Todo</h1>
            <div>
                <Button className="d-flex" variant="primary" onClick={handleShow}>
                    Create
                </Button>

                npm<Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <p>Title: </p>
                        <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
                        <p> User: </p>
                        <Select
                            onChange={(option) => setUser(option)}
                            value={user}
                            options={props.users?.map(u => ({ value: u.id, label: u.name })) || []}
                        />
                        <Form.Check type="checkbox" label="completed" value={completed} onChange={e => setCompleted(e.target.checked)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            props.onCreate(user.value, title, completed)
                            handleClose()
                        }}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    );
};

export default Header;