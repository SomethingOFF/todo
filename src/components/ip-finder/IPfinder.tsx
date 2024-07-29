import axios from "axios";
import { useEffect, useState } from "react";
import Map from "./Map";

const IPfinder = () => {
  const [ipDetails, setipDetails] = useState<any>();
  const [latlon, setLatlon] = useState({
    lat: 22.55,
    lon: 88.38,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://ipapi.co/json");
      console.log(response);
      const { latitude, longitude } = response.data;
      setipDetails(response.data);
      setLatlon({ lat: latitude, lon: longitude });
    };

    fetchData();
  }, []);
  if (!ipDetails) {
    return (
      <div className="flex items-center justify-center h-full">
        SOmething went wrong! 500
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center flex-col gap-4">
      <div className="h-20 flex items-center justify-center text-2xl font-medium">
        IPFinder
      </div>
      <div className="flex w-full max-w-[1080px] mx-auto px-8">
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium text-lg">
            What is my IPv4 address? : {ipDetails.ip}
          </div>

          <div className="flex justify-center flex-col">
            <div className="text-lg font-medium">Approximate location: </div>
            <p>
              {ipDetails?.city}, {ipDetails?.region},{ipDetails?.country_name}.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-medium text-lg">
              Internet Service Provider(ISP):
            </div>
            <p>{ipDetails?.org}</p>
          </div>
        </div>
        <div className="w-full h-full min-h-[500px]">
          <Map lat={latlon.lat} lon={latlon.lon} data={ipDetails} />
        </div>
      </div>
    </div>
  );
};

export default IPfinder;
