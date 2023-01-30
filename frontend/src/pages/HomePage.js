import React, { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import { FaSearch } from 'react-icons/fa';
import ExamLists from "../components/ExamLists/ExamLists";

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
            <form className="max-w-lg p-10 mx-auto" onSubmit={onSubmit}>
              <h1 className="p-5 text-2xl font-medium">{t('search_title')}</h1>

              <div className="flex w-full rounded-md">

                <div className="justify-center w-full" >
                  <input name="university"
                    className="w-full py-3 pl-5 rounded-md form-input"
                    placeholder="University Name"
                  // ref={register({ required: true })}
                  />
                </div>

                <button className="px-4">
                  <FaSearch className="w-5 text-blue-500" />
                </button>

              </div>
            </form>

          </div>

          <div className="flex justify-center">
            <ExamLists/>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
