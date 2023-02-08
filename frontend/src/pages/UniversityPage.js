import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExamLists from "../components/ExamLists/ExamLists";
// import image from 'assets/UoT.jpeg'

function UniversityPage() {

    const { name } = useParams();

    useEffect(() => {
        console.log("TODO: Implement get university data")
    });


    /*
    Temporay dummy data
    */
    const address = "7 Chome-3-1 Hongo, Bunkyo City, Tokyo. 113-8654"
    const nationalRanking = 1
    const internationalRanking = 81

    return (
        <>
            <div>
                <div>

                    <img src="/assets/UoT.jpeg" alt="image" />
                    <p>
                        University Name: {name}
                    </p>
                    <p>
                        Address: {address}
                    </p>
                    <p>
                        International Ranking: {internationalRanking}
                    </p>
                    <p>
                        National ranking: {nationalRanking}
                    </p>
                </div>


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
