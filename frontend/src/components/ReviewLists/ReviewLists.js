import { useState, useEffect } from 'react'
import ReivewListsItem from "./ReviewListsItem"
import { useTranslation } from "react-i18next";

const ReviewLists = () => {
    const { t } = useTranslation();
    const [textarea, setTextarea] = useState("");
    const [name, setName] = useState("");

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
    const [dummayReview, setDummyReview] = useState([]);

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    useEffect(() => {
        setDummyReview(initalReview)

        return () => {
            setDummyReview([])
        }
    }, [])

    const submitReview = (e) => {
        e.preventDefault();

        const randomUsename = "user-" + Math.floor(Math.random() * 1000000000);
        const newReview = {
            comment: e.target.elements.comment.value,
            username: randomUsename
        }
        setDummyReview(oldArray => [newReview, ...oldArray]);
        e.target.elements.comment.value = ""
    }


    return (
        <div className="w-3/4 p-4 mx-auto my-8">

            <form onSubmit={submitReview}>
                <div class="w-full mb-4 border border-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-4 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea
                            id="comment"
                            rows="4"
                            class="border-0 outline-none w-full px-0 text-sm text-gray-900 bg-white dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder={t("write-a-comment")}
                            name="comment"
                            required />
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            {t('post-comment')}
                        </button>
                        {/* <div class="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Attach file</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </form>


            <div className="divide-y rounded-md">
                {dummayReview.map((object, id) => (<ReivewListsItem review={object} />))}
            </div>

        </div >
    )
}

export default ReviewLists;
