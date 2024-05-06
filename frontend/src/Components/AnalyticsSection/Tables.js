import React , {useState,useEffect} from 'react'

const Tables = ({searchText}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const webURL = searchText


  
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `http://localhost:5000/api/getData?webURL=${webURL}`
              );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const responseData = await response.json();
          setData(responseData);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);


    console.log(data)


    
  
   
    const formatDuration = (duration) => {
      const date = new Date(duration);
      const hours = ("0" + date.getUTCHours()).slice(-2);
      const minutes = ("0" + date.getUTCMinutes()).slice(-2);
      const seconds = ("0" + date.getUTCSeconds()).slice(-2);
      return `${hours}:${minutes}:${seconds}`;
    };


    const formatDate = (duration) => {
        const date = new Date(duration);
        const year = date.getUTCFullYear();
        const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        const day = ("0" + date.getUTCDate()).slice(-2);
        
        return `${year}-${month}-${day}`;
    };
  
    

   

    
  
  
    
  
    return (
        <>
      <div
        className="max-w-full mx-auto px-6 md:px-12 xl:px-6"
        style={{ overflowX: "hidden" }}
      >
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
            Website Table
          </h2>
        </div>
        <div
          className="overflow-x-auto sm:-mx-6 lg:-mx-8"
        >
          <div
            className="inline-block min-w-full py-2 sm:px-6 lg:px-8"
            style={{ overflowX: "hidden" }}
          >
            <div className="overflow-hidden" style={{ overflowX: "hidden" }}>
              <div
                className="border rounded-lg border-white overflow-y-auto"
                style={{ maxHeight: "500px" }}
              >
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10" style={{ position: 'sticky', top: '0' }}>
                    <tr className="dark:bg-gray-900">
                      <th scope="col" className="px-5 py-4">
                        WebsiteName
                      </th>
                      <th scope="col" className="px-5 py-4">
                        WebsiteURL
                      </th>
                      <th scope="col" className="px-5 py-4">
                        WebsiteIndustry
                      </th>
                      <th scope="col" className="px-5 py-4">
                        WebsiteVisits
                      </th>
                      <th scope="col" className="px-5 py-4">
                        PagePerVisit
                      </th>
                      <th scope="col" className="px-5 py-4">
                        AverageVisitDuration
                      </th>
                      <th scope="col" className="px-5 py-4">
                        BounceRate
                      </th>
                      <th scope="col" className="px-5 py-4">
                        CategoryRank
                      </th>
                      <th scope="col" className="px-5 py-4">
                        GlobalRank
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.websiteData && data.websiteData.map((website, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.WebsiteName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.WebsiteURL}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.WebsiteIndustry}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.WebsiteVisits}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.PagePerVisit}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatDuration(website.AverageVisitDuration)}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.BounceRate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.CategoryRank}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {website.GlobalRank}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ReferrerSection */}
      <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
          Referrer Table
        </h2>
      </div>
      <div
        className="overflow-x-auto sm:-mx-6 lg:-mx-8"
        
      >
        <div
          className="inline-block min-w-full py-2 sm:px-6 lg:px-8"
          style={{ overflowX: "hidden" }}
        >
          <div className="overflow-hidden" style={{ overflowX: "hidden" }}>
            <div
              className="border rounded-lg border-white overflow-y-auto"
              style={{ maxHeight: "500px" }}
            >
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-white/10"
                  style={{ position: "sticky", top: "0" }}
                >
                  <tr className="dark:bg-gray-900">
                    <th scope="col" className="px-5 py-4">
                      Referrer Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Website Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Referrer URL
                    </th>

                    <th scope="col" className="px-5 py-4">
                      Referrer Type
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Referral Visits
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Traffic Count
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.referrer && data.referrer.map((referrer, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.ReferrerName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.WebsiteName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.ReferrerURL}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.ReferrerType}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.ReferrerViews}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {referrer.TrafficCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Pages tABLE */}
    <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
            Pages Table
          </h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8" style={{ overflowX: 'hidden' }}>
            <div className="overflow-hidden" style={{ overflowX: 'hidden' }}>
              <div className="border rounded-lg border-white overflow-y-auto" style={{ maxHeight: '500px' }}>
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 dark:bg-gray-900" style={{ position: 'sticky', top: '0' }}>
                    <tr className="dark:bg-gray-900">
                      <th scope="col" className="px-5 py-4">
                      Website
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Page Name
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Page Type
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Page Views
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Time Spent
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {data.pages && data.pages.map((page, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{page.Website}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageType}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageView}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDuration(page.Time_Spent)}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Section Table */}


      <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
            Page Section Table
          </h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8" style={{ overflowX: 'hidden' }}>
            <div className="overflow-hidden" style={{ overflowX: 'hidden' }}>
              <div className="border rounded-lg border-white overflow-y-auto" style={{ maxHeight: '500px' }}>
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10" style={{ position: 'sticky', top: '0' }}>
                    <tr className="dark:bg-gray-900">
                      <th scope="col" className="px-5 py-4">
                      Page Name
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Time Span
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Page Section
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {data.pageSection && data.pageSection.map((pageSection, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{pageSection.PageName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDuration(pageSection.Time_Span)}</td>
                        <td className="whitespace-nowrap px-6 py-4">{pageSection.SectionCategory}</td>
                        
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Events Table */}
      <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
          Events Table
        </h2>
      </div>
      <div
        className="overflow-x-auto sm:-mx-6 lg:-mx-8"
        style={{ overflowX: "hidden" }}
      >
        <div
          className="inline-block min-w-full py-2 sm:px-6 lg:px-8"
          style={{ overflowX: "hidden" }}
        >
          <div className="overflow-hidden" style={{ overflowX: "hidden" }}>
            <div
              className="border rounded-lg border-white overflow-y-auto"
              style={{ maxHeight: "500px" }}
            >
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 font-medium dark:border-white/10 dark:bg-gray-900"
                  style={{ position: "sticky", top: "0" }}
                >
                  <tr className="dark:bg-gray-900">
                    <th scope="col" className="px-5 py-4">
                      Website Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Page Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Page Section
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Event Time
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Event Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.events && data.events.map((event, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.WebsiteName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.PageName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.SectionCategory}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {formatDuration(event.EventTime)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {event.EventType}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Sessions Table */}
    <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
            Sessions Table
          </h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8" style={{ overflowX: 'hidden' }}>
            <div className="overflow-hidden" style={{ overflowX: 'hidden' }}>
              <div className="border rounded-lg border-white overflow-y-auto" style={{ maxHeight: '500px' }}>
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 dark:bg-gray-900" style={{ position: 'sticky', top: '0' }}>
                    <tr className="dark:bg-gray-900">
                      <th scope="col" className="px-5 py-4">
                      User Name
                      </th>

                      <th scope="col" className="px-5 py-4">
                      Date
                      </th>


                      <th scope="col" className="px-5 py-4">
                      Start Time
                      </th>
                      <th scope="col" className="px-5 py-4">
                      End Time
                      </th>
                      <th scope="col" className="px-5 py-4">
                      IP Address
                      </th>
                      <th scope="col" className="px-5 py-4">
                      Device
                      </th>

                      <th scope="col" className="px-5 py-4">
                      Browser
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {data.sessions && data.sessions.map((session, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{session.UserName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDate(session.Date)}</td>

                        <td className="whitespace-nowrap px-6 py-4">{formatDuration(session.StartTime)}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDuration(session.EndTime)}</td>
                        <td className="whitespace-nowrap px-6 py-4">{session.IPAddress}</td>
                        <td className="whitespace-nowrap px-6 py-4">{session.Device}</td>
                        <td className="whitespace-nowrap px-6 py-4">{session.Browser}</td>

                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* SessionPages Table */}

      <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
            Session Page Table
          </h2>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8" style={{ overflowX: 'hidden' }}>
            <div className="overflow-hidden" style={{ overflowX: 'hidden' }}>
              <div className="border rounded-lg border-white overflow-y-auto" style={{ maxHeight: '500px' }}>
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10" style={{ position: 'sticky', top: '0' }}>
                    <tr className="dark:bg-gray-900">
                      <th scope="col" className="px-5 py-4">
                        Page Name
                      </th>
                      <th scope="col" className="px-5 py-4">
                        Website Name
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {data.sessionPages && data.sessionPages.map((SessionPage, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{SessionPage.PageName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{SessionPage.WebsiteName}</td>
                        
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Users */}
      <div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
    >
      <div
        className="mb-10 space-y-4 px-6 md:px-0"
        
      >
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
          User Table
        </h2>
      </div>
      <div
        className="overflow-x-auto sm:-mx-6 lg:-mx-8"
        style={{ overflowX: "hidden" }}
      >
        <div
          className="inline-block min-w-full py-2 sm:px-6 lg:px-8"
          style={{ overflowX: "hidden" }}
        >
          <div className="overflow-hidden" style={{ overflowX: "hidden" }}>
            <div
              className="border rounded-lg border-white overflow-y-auto"
              style={{ maxHeight: "500px" }}
            >
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10" style={{ position: 'sticky', top: '0' }}>
                  <tr className="dark:bg-gray-900">
                    <th scope="col" className="px-5 py-4">
                      First Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Last Name
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Registration Date
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Last Login Date
                    </th>

                    <th scope="col" className="px-5 py-4">
                      City
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Country
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Gender
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Age
                    </th>
                    <th scope="col" className="px-5 py-4">
                      Age Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.users && data.users.map((user, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.FirstName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.LastName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {formatDate(user.RegistrationDate)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {formatDate(user.LastLoginDate)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.City}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Country}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Gender}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Age}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.AgeCategory}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>






                
      </>
    );
}

export default Tables
