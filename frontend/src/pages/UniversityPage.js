import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExamLists from "../components/ExamLists/ExamLists";
import SchoolInfo from "../components/SchoolInfo/SchoolInfo"
// import image from 'assets/UoT.jpeg'

function UniversityPage() {

    const { name } = useParams();

    useEffect(() => {
        console.log("TODO: Implement get university data")
    });


    return (
        <>
            <div>
                <SchoolInfo schoolName={name} />

                <div>
                    <div className="flex justify-center">
                        <ExamLists />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UniversityPage;
