import SchoolPopularityListItem from './SchoolPopularityListItem'

const SchoolPopularityList = () => {
  const demoData = [
    {
      "name": "The University of Tokyo",
      "view_count": 1831,
      "national_ranking": 1,
      "country_location": "Japan",
      "international_ranking": 30,
    },
    {
      "name": "University of Auckland",
      "view_count": 220,
      "national_ranking": 1,
      "country_location": "New Zealand",
      "international_ranking": 30,
    },
    {
      "name": "University of Califonia",
      "view_count": 320,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
    {
      "name": "Stanford University",
      "view_count": 20,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
    {
      "name": "Massachusetts Institute of Technology",
      "view_count": 12,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
  ]


  return (
    <>
      {/* <div className='w-3/4 m-4'>
        <div className='ml-4 font-bold'>
          Popular school
        </div>
        <div className="grid rounded-md grid-cols-1p-4 lg:grid-cols-2 xl:grid-cols-3 bg-slate-100">
          {demoData.map(c => <SchoolPopularityListItem school={c} />)}
        </div>
      </div> */}


      <div className='m-4 '>
        <div className='ml-1 text-2xl font-bold'>
          Popular school
        </div>
        <ul className="box-border grid grid-cols-1 gap-6 rounded-md md:grid-cols-2 lg:grid-cols-3 bg-slate-100">
          {demoData.map(c => (<li><SchoolPopularityListItem school={c} /></li>))}
        </ul>
      </div>
    </>
  )
};


export default SchoolPopularityList