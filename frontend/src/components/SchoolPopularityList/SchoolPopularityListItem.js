import { useState, useEffect, useCallback } from "react";

const SchoolPopularityListItem = (props) => {

    console.log(props)

    const [imageSrc, setImageSrc] = useState("default_school_logo.jpg");

    // declare the async data fetching function
    const fetchImage = useCallback(async () => {
        // const data = await fetch('https://yourapi.com');
        const data = "/assets/UoT.jpeg";
        setImageSrc(data);
    }, [])

    // the useEffect is only there to call `fetchData` at the right time
    useEffect(() => {
        fetchImage()
            .catch(console.error);;
    }, [fetchImage])

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

                    <div>
                        {props.school.view_count}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SchoolPopularityListItem;
