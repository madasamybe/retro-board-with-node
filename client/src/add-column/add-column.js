import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addColumn } from "../reducers";
import { Modal, Button, Form } from 'react-bootstrap';

export function AddColumn({showColumnModal, setshowColumnModal}) {

    const dispatch = useDispatch();

    const [columnName, setcolumnName] = useState('');

    const handleInputChange = (event) => {
        setcolumnName(event.target.value);
    }

    return (
        <div className="container-fluid">
            <Modal
                size="sm"
                onHide={() => setshowColumnModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showColumnModal}
                animation={false}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Column
                     </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="comment" value={columnName} onChange={handleInputChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> {dispatch(addColumn({columnName})); setshowColumnModal(false);}}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

AddColumn.propTypes = {
    showColumnModal: PropTypes.bool,
    setshowColumnModal: PropTypes.func
};

export default AddColumn;
