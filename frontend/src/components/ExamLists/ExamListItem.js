
const ExamListItem = (props) => {

    return (
        <>
            <div className="p-3 rounded-md hover:bg-slate-300" >
                <div>{props.year}, {props.major}

                    <div className="float-right">
                        <button className="p-1 rounded-md hover:bg-slate-400" >Preview</button>
                        <button className="p-1 rounded-md hover:bg-slate-400" >Download</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ExamListItem;
