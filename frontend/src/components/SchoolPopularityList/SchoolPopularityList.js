import SchoolPopularityListItem from './SchoolPopularityListItem'

const SchoolPopularityList = () => {
  const demoData = [
    {
      "name": "University of Tokyo",
      "view_count": 1831,
    },
    {
      "name": "University of Auckland",
      "view_count": 220,
    },
    {
      "name": "University of Califonia",
      "view_count": 320,
    },
    {
      "name": "Stanford University",
      "view_count": 20,
    },
    {
      "name": "Massachusetts Institute of Technology",
      "view_count": 12,
    },
  ]


  return (
    <>
      <div className="grid w-3/4 grid-cols-3 grid-rows-3 p-4 m-8 rounded-md bg-slate-100 ">
        {demoData.map(c => <SchoolPopularityListItem school={c} />)}
      </div>
    </>
  )
};


export default SchoolPopularityList