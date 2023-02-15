import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0">
                        <img src="/favicon.ico" className="h-8 mr-3" alt="Open kakomon Logo" />
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">{t('open-kakomon')}</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about" className="mr-4 hover:underline md:mr-6 ">{t('about')}</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className="mr-4 hover:underline md:mr-6">{t('privacy-policy')}</a>
                        </li>
                        <li>
                            <a href="/licensing" className="mr-4 hover:underline md:mr-6 ">{t('licensing')}</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">{t('contact')}</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    ©
                    <a href="/" className="hover:underline">{t('open-kakomon')}</a>
                    . All Rights Reserved.
                </span>
            </footer>
        </>
    )
}

export default Footer;
