import LanguageSelector from '../LanguageSelector/LanguageSelector'

const Header = () => {
    return (
    <>
        <div className='flex'>
            <a href="/">
                <img src="/open-kakomon.png" alt="image" className="max-h-52" href="/contact"/> 
            </a>   

            <LanguageSelector/>   
        </div>
    </>
    )
}

export default Header;
