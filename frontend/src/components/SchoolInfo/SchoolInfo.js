import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { countryList } from '../../utils/CountryNameToISO'
import universityPicture from '../../assets/images/UoT.jpeg';
import websiteIcon from '../../assets/icons/Globe.svg'
import fetchSchoolByName from '../../apis/school.api'

const SchoolInfo = (props) => {
    const { t } = useTranslation();

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

    const schoolName = decodeURI(window.location.pathname.split("/")[2])
    // const { schoolName } = props

    const fetchData = async (schoolName) => {
        console.log("#fetchData called")
        const schoolInfo = await fetchSchoolByName(schoolName);

        setSchoolDetails(
            {
                type: schoolInfo.type,
                national_ranking: schoolInfo.national_ranking,
                deviation_value: schoolInfo.deviation_value,
                internationl_ranking: schoolInfo.internationl_ranking,
                english_name: schoolInfo.english_name,
                japanese_name: schoolInfo.japanese_name,
                address: {
                    postal_code: schoolInfo.address.postal_code,
                    address: schoolInfo.address.address
                },
                website_url: schoolInfo.website_url,
                country: schoolInfo.country
            }
        )
        setCountryCode(countryList[schoolInfo.country].toLowerCase())
    }

    useEffect(() => {
        fetchData(schoolName)
            .catch(console.error)
    }, [schoolName])

    return (
        <>
            <div className="flex m-auto w-fit bg-slate-200">

                <img className="object-cover m-1 w-36 h-36" src={universityPicture} alt="school" />

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
                        <span className={"fi fi-" + countryCode} />&nbsp; #{schoolDetails.national_ranking}
                    </div>
                </div>

                <div className="mx-3 my-auto">
                    <a className="flex" href={schoolDetails.website_url} target="_blank" rel="noopener noreferrer">
                        <img src={websiteIcon} className="stroke-cyan-500" alt='website' />
                        {t('website')}
                    </a>

                </div>

            </div>
        </>
    )
}

export default SchoolInfo;
