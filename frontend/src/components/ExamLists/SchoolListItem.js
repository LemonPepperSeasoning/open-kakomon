import React, { useState } from 'react';
import ExamListItem from './ExamListItem';

const SchoolListItem = (props) => {

    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    };

    return (
        <>
            <div className="p-3 mb-8 rounded-md bg-slate-200" key={props.name}>

                <button className="w-full p-1 text-lg text-left rounded-md hover:bg-slate-400" onClick={toggle}>
                    <p className="font-semibold"> {props.name}</p>
                </button>

                {open && (
                    <div className="toggle">
                        {props.exams.map((object, id) => <ExamListItem year={object.year} major={object.major} key={id} />)}
                    </div>
                )}

            </div>

        </>
    )
}

export default SchoolListItem;
