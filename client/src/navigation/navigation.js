import React, { useState } from 'react';
import { AddColumn } from '../add-column/add-column';
import './navigation.less';

export function Navigation() {

    const [showColumnModal, setshowColumnModal] = useState(false);

    return (
        <div className="sidenav">
            <a href="#" title="Add Column" onClick={() => setshowColumnModal(true)}><i className="fa fa-plus" style={{fontSize:"36px"}}></i></a>
            {showColumnModal && 
                <AddColumn 
                    showColumnModal={showColumnModal}
                    setshowColumnModal={setshowColumnModal}
                />
            }
        </div>
    );
}

export default Navigation;
