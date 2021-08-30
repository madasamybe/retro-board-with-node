import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { updateNotes, deleteNotes, updateVoteCount } from "../reducers";
import { Modal, Button, Form } from 'react-bootstrap';
import './notes-editor.less';

export function NotesEditor({ showNotesModal, setShowNotesModal, notes, columnId}) {

    const dispatch = useDispatch();

    const { notesId, votes } = notes;
    
    const [notesText, setNotesText] = useState(notes);

    const handleInputChange = (event) => {
        setNotesText({
            notesId,
            comment: event.target.value,
            votes
        });
    }

    return (
        <div className="container-fluid">
            <Modal
                size="sm"
                onHide={() => setShowNotesModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showNotesModal}
                animation={false}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit
                        <a href="/#" onClick={() => {dispatch(deleteNotes({notesId, columnId})); setShowNotesModal(false);}} title="Delete"><i className="fa fa-trash-o fa-lg modal-delete-icon"></i></a>
                     </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} name="comment" value={notesText.comment} onChange={handleInputChange}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <span className="vote-icon">
                    <a href="/#" onClick={() => dispatch(updateVoteCount({notesId, columnId}))} title="Vote"><i className="fa fa-thumbs-up"></i></a> {votes === 0 ? '' : `(${votes})`}
                </span>
                    <Button onClick={()=> {dispatch(updateNotes({notesText, columnId})); setShowNotesModal(false);}}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

NotesEditor.propTypes = {
    showNotesModal: PropTypes.bool,
    setShowNotesModal: PropTypes.func,
    columnId: PropTypes.string,
    notes: PropTypes.object
};

export default NotesEditor;
