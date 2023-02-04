import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import NavButton from './NavButton';

const Header = () => {
    const { i18n } = useTranslation('home');

    return (
        <>
            <div className='flex border-b-2 border-gray-100'>
                <a href="/" className='mr-auto'>
                    <img
                        src={i18n.language === 'en' ? "/open-kakomon.png" : "/open-kakomon-jp.png"}
                        alt="company logo"
                        className="max-h-24"
                        href="/contact"
                    />
                </a>

                <div className='pr-8 mt-auto bottom-2'>
                    <NavButton title="upload_exam" path="/share-exam" />
                </div>

                <div className='mt-auto block-inline'>
                    <LanguageSelector />
                </div>
            </div>
        </>
    )
}

export default Header;
