import { useState, useEffect } from "react";

const API = "https://hubspot-demo-2-api.vercel.app/api/list";

const getData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
  return data;
};

export const App = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <ul>
        {data.length < 1 && <li>Loading...</li>}
        {data.length >= 1 && data.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default App;
