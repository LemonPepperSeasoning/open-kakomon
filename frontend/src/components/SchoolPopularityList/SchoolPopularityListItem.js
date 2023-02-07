import { useState, useEffect, useCallback } from "react";
import { countryList } from '../../utils/CountryNameToISO'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const SchoolPopularityListItem = (props) => {

    console.log(props)

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
            <div className="flex p-1 m-3 m-auto rounded-md w-80 bg-slate-200">
                <div>
                    <img className="object-cover w-12 h-12" src={imageSrc} alt="school logo" />
                </div>


                <div className="p-1 w-60">
                    <div className="overflow-hidden font-bold text-ellipsis whitespace-nowrap">

                        {props.school.name}
                    </div>


                    <div className="flex">

                        <div className="mr-4">
                            🌎#{props.school.international_ranking}
                        </div>

                        <div className="mr-4">
                            <span class={"fi fi-" + countryCode}></span>#{props.school.national_ranking}
                        </div>

                        {props.school.view_count} views
                    </div>
                </div>
            </div>
        </>
    )
}

export default SchoolPopularityListItem;
