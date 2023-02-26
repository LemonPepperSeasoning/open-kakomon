import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from 'react-icons/fa';
import SchoolPopularSchoolsList from "../components/SchoolPopularityList/SchoolPopularityList"
import SearchIcon from "../assets/icons/Search_Magnifying_Glass.svg"


function HomePage() {
  const { t } = useTranslation();
  // const history = useHistory();
  // const { register, handleSubmit } = useForm();
  // const [university, setUniversity] = useState('');

  const onSubmit = (data) => {
    console.log("SUBMITED")
    // setUniversity(data.university);
    // history.push(`/search?university=${data.university}`);
  }


  return (
    <>
      <main className="mb-auto">
        <div>
          <div className="bg-gray-100">

            <form className="max-w-xl p-10 mx-auto" onSubmit={onSubmit}>
              <h1 className="p-5 text-3xl font-medium">{t('search_title')}</h1>
              <br />

              <div className="flex w-full rounded-md">
                <div className="justify-center w-full" >
                  <input name="university"
                    className="w-full py-3 pl-5 rounded-md form-input"
                    placeholder="University name, Subject, City name "
                  />
                </div>

                <button className="px-4 bg-blue-600 rounded-md hover:bg-blue-700">
                  <img src={SearchIcon} alt="search" />
                </button>
              </div>
            </form>

          </div>


          <div className="flex justify-center">
            <SchoolPopularSchoolsList />
          </div>


          <div className="max-w-2xl m-auto text-xl font-semibold bg-gray-100 w-fit">
            <p>
              {t('gather-by-community-message')} <br />
              {t('please-share-message')}
            </p>

            <br />
            <div className="m-auto w-fit">
              <a href='/share-exam'>
                <button className="p-2 text-white bg-blue-600 rounded-md p-82 hover:bg-blue-700">
                  {t('upload_exam')}
                </button>
              </a>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default HomePage;
