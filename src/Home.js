import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "./api";
import Table from "./Table";

function Home() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_ENDPOINT}`)
        .then((result) => result.json())
        .then((res) => setTableData(res.data));
      //   const json = res.json();
      //   console.log(json);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Table data={tableData} />
    </div>
  );
}

export default Home;
