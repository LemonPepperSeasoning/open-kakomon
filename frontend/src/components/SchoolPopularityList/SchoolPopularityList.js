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
      "name": "Chiba University",
      "view_count": 220,
      "national_ranking": 1,
      "country_location": "New Zealand",
      "international_ranking": 30,
    },
    {
      "name": "Tokyo University of Foreign Studies",
      "view_count": 320,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
    {
      "name": "Tokyo Gakugei University",
      "view_count": 20,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
    {
      "name": "Tokyo Institute of Technology",
      "view_count": 12,
      "national_ranking": 1,
      "country_location": "United States",
      "international_ranking": 30,
    },
  ]


  return (
    <>
      <div className='m-4 '>
        <div className='ml-1 text-2xl font-bold'>
          Popular school
        </div>
        <ul className="box-border grid grid-cols-1 gap-6 rounded-md md:grid-cols-2 lg:grid-cols-3 bg-slate-100">
          {demoData.map((object, id) => (<li key={id}><SchoolPopularityListItem school={object} /></li>))}
        </ul>
      </div>
    </>
  )
};


export default SchoolPopularityList