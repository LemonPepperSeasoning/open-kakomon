import React, { useState } from 'react';
import ExamListItem from './ExamListItem';

const SchoolListItem = (props) => {

    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };

    return (
        <>
            <div className="p-3 mb-8 rounded-md bg-slate-200" >

                <button className="w-full p-1 text-lg text-left rounded-md hover:bg-slate-400" onClick={toggle}>
                    <p class="font-semibold"> {props.name}</p>
                    {/* {props.name} */}
                </button>
                
                {open && (
                <div className="toggle">
                    {props.exams.map(c => <ExamListItem year={c.year} major={c.major}/>)}
                </div>
                )}
                
            </div>
            
        </>
    )
}

export default SchoolListItem;
