import { useState } from 'react'
import ReivewListsItem from "./ReviewListsItem"
import { useTranslation } from "react-i18next";

const ReviewLists = () => {
    const { t } = useTranslation();


    const initalReview = [
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
    const [dummayReview, setDummyReview] = useState(initalReview);


    const submitReview = (e) => {
        console.log(e)
        const newReview = {
            comment: "Yo new comment",
            username: "Kevin"
        }
        setDummyReview(oldArray => [newReview, ...oldArray]);
    }
    return (
        <div className="w-3/4 p-4 mx-auto my-8">

            <div className="rounded-md bg-red">
                <div>
                    <input name="university"
                        className="w-1/2 py-3 pl-5 border-2 border-black rounded-md form-input"
                        placeholder="Name"
                    />

                    <select className="p-2 rounded-md"
                        name="Status"
                        id="status">
                        <option value="" selected disabled hidden>--- Choose here ---</option>
                        <option value={`student`}>I'm student at this University</option>
                        <option value={`preparing`}>I am preparing for this entrance exam</option>
                        <option value={`took`}>I took this entrance exam paper</option>
                        <option value={`random`}>I am Random</option>
                    </select>
                </div>

                <div>
                    <textarea name="university"
                        className="w-full py-3 pl-5 border-2 border-black rounded-md form-input"
                        placeholder="Comment ... "
                    />
                </div>

                <button className="p-2 text-white bg-blue-600 rounded-md p-82 hover:bg-blue-700" onClick={submitReview}>
                    Write a review
                </button>
            </div>

            <div className="rounded-md bg-slate-100">
                {dummayReview.map((object, id) => (<ReivewListsItem review={object} />))}
            </div>
        </div >
    )
}

export default ReviewLists;
