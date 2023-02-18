
const fetchSchoolByName = async (schoolName) => {
    const results = fetch("/api/v1/school?" + new URLSearchParams({ "english_name": schoolName }), {
        headers: {
            "accepts": "application/json"
        }
    })
        .then((response) => response.json())

    return results;
}


export default fetchSchoolByName