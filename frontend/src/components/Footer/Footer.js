import { Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";

const Footer = () => {
    return (
        <>
            <footer class="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="" class="flex items-center mb-4 sm:mb-0">
                        <img src="/favicon.ico" class="h-8 mr-3" alt="Open kakomon Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Open Kakomon</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/licensing" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©
                    <a href="" class="hover:underline">Open Kakomon</a>
                    . All Rights Reserved.
                </span>
            </footer>
        </>
    )
}

export default Footer;
