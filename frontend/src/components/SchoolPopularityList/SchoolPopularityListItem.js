import { useState, useEffect, useCallback } from "react";
import { countryList } from '../../utils/CountryNameToISO'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import universityPicture from '../../assets/images/UoT.jpeg';

const SchoolPopularityListItem = (props) => {

    const [imageSrc, setImageSrc] = useState("default_school_logo.jpg");
    const countryCode = countryList[props.school.country_location].toLowerCase();

    // declare the async data fetching function
    const fetchImage = useCallback(async () => {
        // const data = await fetch('https://yourapi.com');
        const data = "/assets/UoT.jpeg";
        setImageSrc(data);
    }, [])

    const setCountry =

        // the useEffect is only there to call `fetchData` at the right time
        useEffect(() => {
            fetchImage()
                .catch(console.error);;
        }, [fetchImage])

    // UNICODE FROM : https://unicode-table.com/en/search/?q=world
    return (
        <>
            <a href={"/university/" + props.school.name + "/exam"}>
                <div className="flex p-1 mx-auto rounded-md w-72 bg-slate-200 hover:bg-slate-300">
                    <div>
                        <img className="object-cover w-12 h-12 m-1" src={universityPicture} alt="school logo" />
                    </div>

                    <div className="w-56 p-1">
                        <div className="overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                            {props.school.name}
                        </div>


                        <div className="flex">

                            <div className="mr-4">
                                🌎 #{props.school.international_ranking}
                            </div>

                            <div className="flex mr-4">
                                <span className={"fi fi-" + countryCode} />&nbsp; #{props.school.national_ranking}
                            </div>

                            {props.school.view_count} views
                        </div>
                    </div>
                </div>

            </a>

        </>
    )
}

export default SchoolPopularityListItem;
