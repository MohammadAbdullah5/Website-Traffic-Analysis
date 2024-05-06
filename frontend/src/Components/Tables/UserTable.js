import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, scale: 0 },
};

const UserTable = () => {
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
        const response = await fetch(`http://localhost:5000/api/getUserData`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
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

  const formatDate = (duration) => {
    const date = new Date(duration);
    const year = date.getUTCFullYear();
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const day = ("0" + date.getUTCDate()).slice(-2);

    return `${year}-${month}-${day}`;
};



  const formattedData = Array.isArray(data)
    ? data.map((item) => ({
        ...item,
        RegistrationDate: formatDate(item.RegistrationDate),
        LastLoginDate: formatDate(item.LastLoginDate),

      }))
    : [];

  return (
    <motion.div
      className="max-w-full mx-auto px-6 md:px-12 xl:px-6 box"
      style={{ overflowX: "hidden" }}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
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
                  {formattedData.map((user, index) => (
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
                        {user.RegistrationDate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.LastLoginDate}
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
    </motion.div>
  );
};

export default UserTable;
