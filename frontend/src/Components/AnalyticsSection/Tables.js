import React , {useState,useEffect} from 'react'
import { default as api } from "../Store/apiSlice";

const Tables = ({searchText}) => {
    
    const webURL = searchText

    const { data, isFetching, isSuccess, isError } = api.useGetAllDataQuery(webURL);
    

   
    const formatDuration = (timestamp) => {
      try {
        const date = new Date(timestamp);
    
        // Log the raw date to ensure it is parsed correctly
        console.log('Parsed date:', date);
    
        // Ensure the date is valid
        if (isNaN(date.getTime())) {
          console.error('Invalid date:', timestamp);
          return '00:00:00';
        }
    
        const hrs = date.getUTCHours();
        const mins = date.getUTCMinutes();
        const secs = date.getUTCSeconds();
    
        // Log the extracted hours, minutes, and seconds
        console.log(`Hours: ${hrs}, Minutes: ${mins}, Seconds: ${secs}`);
    
        // Return the formatted time as HH:MM:SS
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      } catch (error) {
        console.error('Error parsing timestamp:', error);
        return '00:00:00';
      }
    };


    const formatDuration2 = (durationString) => {
      const [datePart, timePart] = durationString.split(' ');
      const [hours, minutes] = timePart.split(':');
      return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
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
                    {isSuccess && data.websiteData && data.websiteData.map((website, index) => (
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
                  {isSuccess && data.referrer && data.referrer.map((referrer, index) => (
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
                    {isSuccess && data.pages && data.pages.map((page, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{page.Website}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageType}</td>
                        <td className="whitespace-nowrap px-6 py-4">{page.PageView}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDuration2(page.Time_Spent)}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      


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
                    {isSuccess && data.pageSection && data.pageSection.map((pageSection, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{pageSection.PageName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{formatDuration2(pageSection.Time_Span)}</td>
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
                  {isSuccess && data.events && data.events.map((event, index) => (
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
                    {isSuccess && data.sessions && data.sessions.map((session, index) => (
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
                    {isSuccess && data.sessionPages && data.sessionPages.map((SessionPage, index) => (
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
                  {isSuccess && data.users && data.users.map((user, index) => (
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
