import React from "react";
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import { Button, Table } from 'react-bootstrap';
import Select from "react-select"
import { Card, FormControl } from 'react-bootstrap'

function Search(props) {

    const options = props.users.map(u => {
        return {
            value: u.id,
            label: u.name
        }
    });

    return (



        <Card body>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div style={{ width: 300 }}>
                    <p>By username</p>
                    <Select onChange={(option) => props.onSelectUser(option.value)}
                        value={props.selectedUser ? options.find(opt => opt.value === props.selectedUser) : undefined} options={options} />

                </div>
                <div>
                    <p>By title</p>
                    <Form>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={props.search}
                            onChange={(e) => props.onChangeSearch(e.target.value)} />
                    </Form>
                </div>
            </div>
        </Card >
    )
}
export default Search;