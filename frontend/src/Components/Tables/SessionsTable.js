import React , {useState,useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const SessionsTable = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

 
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `http://localhost:5000/api/getSessionsData`
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
    });
  
    const formatDuration = (duration) => {
      const date = new Date(duration);
      const hours = ('0' + date.getUTCHours()).slice(-2);
      const minutes = ('0' + date.getUTCMinutes()).slice(-2);
      const seconds = ('0' + date.getUTCSeconds()).slice(-2);
      return `${hours}:${minutes}:${seconds}`;
    };

    const formatDate = (duration) => {
      const date = new Date(duration);
      const year = date.getUTCFullYear();
      const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
      const day = ("0" + date.getUTCDate()).slice(-2);
      
      return `${year}-${month}-${day}`;
  };

  
    const formattedData = data.map((item) => ({
      ...item,
      StartTime: formatDuration(item.StartTime),
      EndTime: formatDuration(item.EndTime),
      Date : formatDate(item.Date)

    }));
  
    
  
    return (
      <motion.div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
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
                    {formattedData.map((session, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">{session.UserName}</td>
                        <td className="whitespace-nowrap px-6 py-4">{session.Date}</td>

                        <td className="whitespace-nowrap px-6 py-4">{session.StartTime}</td>
                        <td className="whitespace-nowrap px-6 py-4">{session.EndTime}</td>
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
      </motion.div>
    );
}

export default SessionsTable
