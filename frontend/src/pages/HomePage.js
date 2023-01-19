import { FaSearch } from 'react-icons/fa';

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
      <div className="bg-gray-100">
        <form className="mx-auto max-w-md p-6" onSubmit={onSubmit}>
          <h1 className="text-2xl font-medium">Search for University Exam Papers</h1>

          <div className="w-full rounded-md flex">

            <div className="w-full justify-center" >
              <input name="university" 
                    className="w-full form-input py-3 pl-10 rounded-md" 
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
    </>
  );
}

export default HomePage;
  