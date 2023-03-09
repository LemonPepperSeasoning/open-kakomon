import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReportModal from "./ReportModal"

const ReviewListsItem = (props) => {

    const { t } = useTranslation();

    const [isModalOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };
    // "post-comment": "Post comment",
    //     "helpful": "Helpful",
    //         "report-abuse": "Report abuse",
    //             "read-more": "Read more",



    return (
        <>
            <div className="pt-3 my-3 rounded-md ">

                {isModalOpen && <ReportModal onRequestClose={toggleModal} />}

                <article>
                    <div class="flex items-center mb-4 space-x-4">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>

                        <div class="space-y-1 font-medium dark:text-white">
                            <p>{props.review.username} <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">2014/05/10</time></p>
                        </div>
                    </div>

                    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">{props.review.comment}</p>
                    {/* <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        {t('read-more')}
                    </a> */}

                    <aside>
                        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                        <div class="flex items-center mt-3">

                            <div class="flex items-center space-x-5">
                                <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    <svg aria-hidden="true" class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                                    {t('helpful')}
                                </a>
                                <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group">
                                    <svg aria-hidden="true" class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>
                                    {t('not-helpful')}
                                </a>
                            </div>

                            <button onClick={toggleModal} type="button" class="ml-auto text-gray-500 hover:bg-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                                <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"></path>
                                </svg>
                                {t('report')}
                            </button>
                        </div>
                    </aside>

                </article>
            </div>
        </>
    )
}

export default ReviewListsItem;
