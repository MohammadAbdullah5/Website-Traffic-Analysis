import React , {useEffect,useState} from 'react'

const WebsiteTable = ({searchText}) => {
    const [Data, setData] = useState(-99);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const webURL = searchText;
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `http://localhost:5000/api/getWebsiteData?webURL=${webURL}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch rank data");
          }
          const data = await response.json();
  
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    const website = Data;
    console.log(website);
  
    return (
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      WebsiteName
                    </th>
                    <th scope="col" class="px-6 py-4">
                      WebsiteURL
                    </th>
                    <th scope="col" class="px-6 py-4">
                      WebsiteIndustry
                    </th>
                    <th scope="col" class="px-6 py-4">
                      WebsiteVisits
                    </th>
                    <th scope="col" class="px-6 py-4">
                      PagePerVisit
                    </th>
                    <th scope="col" class="px-6 py-4">
                      AverageVisitDuration
                    </th>
                    <th scope="col" class="px-6 py-4">
                      BounceRate
                    </th>
                    <th scope="col" class="px-6 py-4">
                      CategoryRank
                    </th>
                    <th scope="col" class="px-6 py-4">
                      GlobalRank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {website.map((website, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-6 py-4">{website.WebsiteName}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.WebsiteURL}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.WebsiteIndustry}</td>
                      
                      <td class="whitespace-nowrap px-6 py-4">{website.WebsiteVisits}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.PagePerVisit}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.AverageVisitDuration}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.BounceRate}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.CategoryRank}</td>
                      <td class="whitespace-nowrap px-6 py-4">{website.GlobalRank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WebsiteTable
