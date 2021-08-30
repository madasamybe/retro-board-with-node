import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid_v4 } from "uuid";
import { Notes } from '../notes/notes';
import { NotesEditor } from "../notes-editor/notes-editor";
import './column.less';

export function Column({column}) {
    const { notesList, columnId } = column;
    const [showNotesModal, setShowNotesModal] = useState(false);

    const notes = { comment: "", notesId:uuid_v4(), votes:0 };

    return (
        <>
            <div className="column-title"> {column.title} 
                <a href="#" onClick={() => { setShowNotesModal(true); }} title="Add Column"><i className="fa fa-plus add-notes" style={{fontSize:"20px"}}></i></a>
            </div>
            <hr/>
            <div className="column-content" id="column-content">
                {
                    notesList.map((notes, index)=>{
                        return (
                            <Notes 
                                notes={notes}
                                key={index} 
                                columnId={columnId}
                            />
                        )
                    })
                }
            </div>
            {showNotesModal && 
                <NotesEditor 
                    showNotesModal={showNotesModal} 
                    setShowNotesModal={setShowNotesModal}
                    notes={notes}
                    columnId={columnId}
                />
            }
        </>
    );
}

Column.propTypes = {
    column: PropTypes.object
};

export default Column;