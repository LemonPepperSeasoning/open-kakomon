import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExamLists from "../components/ExamLists/ExamLists";
import ReviewLists from "../components/ReviewLists/ReviewLists";
import SchoolInfo from "../components/SchoolInfo/SchoolInfo"
// import image from 'assets/UoT.jpeg'

function UniversityPage() {

    const { name } = useParams();
    const navigate = useNavigate()
    const displayContent = (window.location.href.substring(window.location.href.lastIndexOf('/') + 1));

    useEffect(() => {
        console.log("TODO: Implement get university data")
    });



    return (
        <>
            <div>
                <SchoolInfo schoolName={name} />


                <div className="border-b-2 border-gray-100">

                    <div className="flex w-3/4 m-auto">
                        <a onClick={() => navigate("/university/" + name + "/exam")}>
                            <p className={"py-2 px-4 border-b-[3px] border-transparent hover:border-blue-500" + (displayContent === "exam" ? " text-base font-medium" : "")}>
                                Exam
                            </p>
                        </a>

                        <a onClick={() => navigate("/university/" + name + "/reviews")}>
                            <p className={"py-2 px-4 border-b-[3px] border-transparent hover:border-blue-500" + (displayContent === "reviews" ? " text-base font-medium" : "")}>
                                Reviews
                            </p>
                        </a>
                    </div>

                </div>
                <div>
                    <div className="flex justify-center">
                        {
                            displayContent === "exam" ? <ExamLists /> : <ReviewLists />
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default UniversityPage;
