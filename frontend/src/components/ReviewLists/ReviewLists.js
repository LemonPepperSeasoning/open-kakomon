import ReivewListsItem from "./ReviewListsItem"

const ReviewLists = () => {


    const dummyReviews = [
        {
            comment: "This school is great !",
            username: "Joe"
        },
        {
            comment: "This school is Bad !",
            username: "John"
        },
        {
            comment: "This school is Average !",
            username: "Steve"
        },
        {
            comment: "This school is whatever !",
            username: "Jack"
        },
        {
            comment: "This school is excellent !",
            username: "Broski"
        },

    ]

    return (
        <>

            <div className="w-3/4 p-4 m-8 rounded-md bg-slate-100">
                {dummyReviews.map((object, id) => (<ReivewListsItem review={object} />))}
            </div>
        </>
    )
}

export default ReviewLists;
