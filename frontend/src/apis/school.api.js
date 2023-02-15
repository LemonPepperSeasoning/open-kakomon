
const fetchSchoolByName = async (schoolName) => {
    fetch("/api/v1/school?" + new URLSearchParams({ "english_name": schoolName }), {
        headers: {
            "accepts": "application/json"
        }
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}


export default fetchSchoolByName