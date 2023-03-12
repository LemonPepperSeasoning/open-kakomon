import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import ExamLists from "../components/ExamLists/ExamLists";
import ReviewLists from "../components/ReviewLists/ReviewLists";
import SchoolInfo from "../components/SchoolInfo/SchoolInfo"

function UniversityPage() {
    const { t } = useTranslation();
    const { schoolName } = useParams();
    const navigate = useNavigate()
    const displayContent = (window.location.href.substring(window.location.href.lastIndexOf('/') + 1));

    useEffect(() => {
        console.log("TODO: Implement get university data")
    });



    return (
        <>
            <div className="m-2">
                <SchoolInfo schoolName={schoolName} />


                <div className="border-b-2 border-gray-100">

                    <div className="flex w-3/4 m-auto">
                        <div onClick={() => navigate("/university/" + schoolName + "/exam")}>
                            <p className={"mx-2 py-2 px-4 border-b-[3px] border-transparent hover:border-blue-500" + (displayContent === "exam" ? " text-base font-medium border-blue-500" : "")}>
                                {t('exam')}
                            </p>
                        </div>

                        <div onClick={() => navigate("/university/" + schoolName + "/reviews")}>
                            <p className={"mx-2 py-2 px-4 border-b-[3px] border-transparent hover:border-blue-500" + (displayContent === "reviews" ? " text-base font-medium border-blue-500" : "")}>
                                {t('reviews')}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
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
