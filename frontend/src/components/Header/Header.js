import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import NavButton from './NavButton';
import japaneseLogo from '../../assets/logos/open-kakomon-jp.png'
import englishLogo from '../../assets/logos/open-kakomon.png'


const Header = () => {
    const { i18n } = useTranslation('home');

    return (
        <>
            <div className='flex border-b-2 border-gray-100'>
                <a href="/" className='pl-2 mr-auto'>
                    <img
                        src={i18n.language === 'en' ? englishLogo : japaneseLogo}
                        alt="company logo"
                        className="max-h-24"
                        href="/contact"
                    />
                </a>

                <div className='pr-8 mt-auto bottom-2'>
                    <NavButton title="upload_exam" path="/share-exam" />
                </div>

                <div className='pr-20 mt-auto block-inline'>
                    <LanguageSelector />
                </div>
            </div>
        </>
    )
}

export default Header;
