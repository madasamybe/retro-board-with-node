import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NotesEditor } from "../notes-editor/notes-editor";
import { deleteNotes, updateVoteCount } from "../reducers";
import './notes.less';

export function Notes({notes, columnId}) {
    const dispatch = useDispatch();
    const { comment, notesId, votes } = notes;
    const [showNotesModal, setShowNotesModal] = useState(false);

    return (
        <div className="notes" id={notesId}>
            <span className="actions">
                <a href="#" onClick={() => dispatch(deleteNotes({notesId, columnId}))} title="Delete"><i className="fa fa-trash-o fa-lg"></i></a>
                <a href="#" onClick={() => setShowNotesModal(true)} title="Edit"><i className="fa fa-pencil-square-o fa-lg edit-icon"></i></a>
            </span>
            {showNotesModal && 
                <NotesEditor 
                    showNotesModal={showNotesModal} 
                    setShowNotesModal={setShowNotesModal}
                    notes={notes}
                    columnId={columnId}
                />
            }
            <p>{comment}</p>
            <span className="vote-icon">
                <a href="#" onClick={() => dispatch(updateVoteCount({notesId, columnId}))} title="Vote"><i className="fa fa-thumbs-up"></i></a> {votes === 0 ? '' : `(${votes})`}
            </span>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.object,
    columnId: PropTypes.string
};

export default Notes;
