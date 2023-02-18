import SchoolListItem from "./SchoolListItem";

const ExamLists = () => {

    const demoData = [
        {
            "name": "University of Tokyo",
            "exams": [
                { "id": "e0001", "year": "2010", "major": "Computer Science" },
                { "id": "e0002", "year": "2011", "major": "Computer Science" },
                { "id": "e0003", "year": "2012", "major": "Computer Science" }
            ]
        },
        {
            "name": "University of Auckland",
            "exams": [
                { "id": "e0004", "year": "2010", "major": "Business" },
                { "id": "e0005", "year": "2011", "major": "Business" },
                { "id": "e0006", "year": "2012", "major": "Computer Science" },
                { "id": "e00017", "year": "2022", "major": "Finance" },
            ]
        },
        {
            "name": "University of Califonia",
            "exams": [
                { "id": "e0007", "year": "2010", "major": "Electrical Engineering" },
                { "id": "e0008", "year": "2011", "major": "Law" },
                { "id": "e0009", "year": "2012", "major": "Finance" },
            ]
        },
        {
            "name": "Stanford University",
            "exams": [
                { "id": "e00010", "year": "2010", "major": "Computer Science" },
            ]
        },
        {
            "name": "Massachusetts Institute of Technology",
            "exams": [
                { "id": "e00013", "year": "2010", "major": "Computer Science" },
                { "id": "e00011", "year": "2011", "major": "Computer Science" },
            ]
        },
    ]


    return (
        <>
            <div className="w-3/4 p-4 m-8 rounded-md bg-slate-100">
                {demoData.map((object, id) => <SchoolListItem name={object.name} exams={object.exams} key={id} />)}
            </div>
        </>
    )
}

export default ExamLists;
