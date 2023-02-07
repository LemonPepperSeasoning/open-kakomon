import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from 'react-icons/fa';
import ExamLists from "../components/ExamLists/ExamLists";
import SchoolPopularSchoolsList from "../components/SchoolPopularityList/SchoolPopularityList"

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
      <main class="mb-auto">
        <div>
          <div className="bg-gray-100">

            <form className="max-w-xl p-10 mx-auto" onSubmit={onSubmit}>
              <h1 className="p-5 text-2xl font-medium">{t('search_title')}</h1>

              <div className="flex w-full rounded-md">
                <div className="justify-center w-full" >
                  <input name="university"
                    className="w-full py-3 pl-5 rounded-md form-input"
                    placeholder="University name, Subject, City name "
                  />
                </div>

                <button className="px-4">
                  <FaSearch className="w-5 text-blue-500" />
                </button>
              </div>

              <br />

              <div className="flex w-full rounded-md">
                <div className="justify-center w-full" >
                  <input name="university"
                    className="w-full py-3 pl-5 rounded-md form-input"
                    placeholder="University name, Subject, City name "
                  />
                </div>

                <button className="px-4 bg-blue-600 rounded-md">
                  <FaSearch className="w-5 text-white" />
                </button>
              </div>
            </form>

          </div>


          <div className="flex justify-center">
            <SchoolPopularSchoolsList />
          </div>

          <div className="flex justify-center">
            <ExamLists />
          </div>


          <div className="max-w-2xl m-auto text-2xl bg-gray-100">
            <p>
              This is a public database, gathered by our community. <br />
              If you have any exam, please share with us by submitting it below.
            </p>

            <br />
            <a href='/share-exam'>
              <button className="w-1/3 p-2 text-white bg-blue-600 rounded-md p-82 hover:bg-blue-700">
                Upload exam
              </button>
            </a>

          </div>


        </div>
      </main>
    </>
  );
}

export default HomePage;
