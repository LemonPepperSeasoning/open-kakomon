import { useEffect, useState } from "react";
import { countryList } from '../../utils/CountryNameToISO'
import { GrDomain } from 'react-icons/gr';
import universityPicture from '../../assets/images/UoT.jpeg';
import websiteIcon from '../../assets/icons/Globe.svg'


const SchoolInfo = (props) => {

    const [countryCode, setCountryCode] = useState();
    const [schoolDetails, setSchoolDetails] = useState({
        type: "",
        national_ranking: "",
        deviation_value: "",
        internationl_ranking: "",
        english_name: "",
        japanese_name: "",
        address: {
            postal_code: "",
            address: ""
        },
        website_url: "",
        country: ""
    });


    const { schoolName } = props

    const fetchData = async (schoolName) => {
        setCountryCode(countryList["Japan"].toLowerCase())
        setSchoolDetails(
            {
                type: "国立",
                national_ranking: "1",
                deviation_value: "75.0",
                internationl_ranking: "23",
                english_name: "The University of Tokyo",
                japanese_name: "東京大学",
                address: {
                    postal_code: "〒113-8654",
                    address: "東京都文京区本郷７丁目３−１"
                },
                website_url: "https://www.u-tokyo.ac.jp/ja/index.html",
                country: "Japan"
            }
        )
    }

    useEffect(() => {
        fetchData(schoolName)
            .catch(console.error)
    }, [schoolName])

    return (
        <>
            <div className="flex m-auto w-fit bg-slate-200">

                <img className="object-cover m-1 w-36 h-36" src={universityPicture} alt="image" />

                <div className="mx-5 my-auto">
                    <p className="text-xl font-semibold">
                        {schoolDetails.japanese_name}
                    </p>
                    <p className="text-base font-semibold">
                        {schoolDetails.type}
                    </p>
                    <p className="text-base font-semibold">
                        {schoolDetails.address.address}
                    </p>
                </div>

                <div className="mx-3 my-auto">
                    <div>
                        🌎 #{schoolDetails.internationl_ranking}
                    </div>
                    <div>
                        <span class={"fi fi-" + countryCode} />&nbsp; #{schoolDetails.national_ranking}
                    </div>
                </div>

                <div className="mx-3 my-auto">
                    <a className="flex" href={schoolDetails.website_url} target="_blank" rel="noopener noreferrer">
                        <img src={websiteIcon} className="stroke-cyan-500" />
                        Website
                    </a>

                </div>

            </div>
        </>
    )
}

export default SchoolInfo;
