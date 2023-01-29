
const ExamListItem = (props) => {

    return (
        <>
            <div className="p-3" >
                <p>{props.year}, {props.major} 

                    <div className="float-right">
                        <button className="p-1 rounded-md hover:bg-slate-400">Preview</button>
                        <button className="p-1 rounded-md hover:bg-slate-400">Download</button>
                    </div>
                    
                </p>
            </div> 
        </>
    )
}

export default ExamListItem;
