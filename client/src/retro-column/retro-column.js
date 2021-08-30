import React from 'react';
import { useSelector } from 'react-redux';
import { Column } from '../column/column';
import './retro-column.less';

export function RetroColumn() {
    const columnList = useSelector(state => state.retro.columnList);
    return (
        <div className="column-container">
            {
                columnList.map((column, index) => {
                    return (
                        <div className="retro-column" key={column.columnId}>
                            <Column column={column} key={index} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RetroColumn;
