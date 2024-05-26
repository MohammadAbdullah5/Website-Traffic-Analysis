import React  from 'react'
import { default as api } from "../Store/apiSlice";
import { DotLoader } from "react-spinners";




const PagesTable = () => {
  
  
  const { data, isFetching, isSuccess, isError } = api.useGetPagesDataQuery();

  if(isFetching)
    {
      return(
      <>
        
          <div className="dark:bg-gray-800 fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="dark:bg-transparent">
              <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                <DotLoader color="#36d7b7" size={60} />
              </div>
            </div>
          </div>
          </>
      )
        
    }
  
    if(isError)
    {
      return (
        <div className="text-red-500 text-center mt-4">
            Failed to fetch data: {isError}
          </div>
      )
  
    }
  
  
  const formatDuration = (durationString) => {
    const [datePart, timePart] = durationString.split(' ');
    const [hours, minutes] = timePart.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
  };

  
  
    
  
    return (
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
                    {isSuccess && data.map((page, index) => (
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
    );
}

export default PagesTable
