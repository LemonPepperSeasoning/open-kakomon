import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';


function HomePage() {

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
      <div class="flex flex-col h-screen justify-between">
        <header><Header /></header>
        <main class="mb-auto">
          <div>
            <div className="bg-gray-100">
              <form className="max-w-lg p-10 mx-auto" onSubmit={onSubmit}>
                <h1 className="p-5 text-2xl font-medium">Search for University Exam Papers</h1>

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
          </div>
        </main>
        <footer> <Footer /></footer>
      </div>
    </>
  );
}

export default HomePage;
