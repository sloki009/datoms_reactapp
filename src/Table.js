import React, { useState, useEffect } from "react";

function Table({ data }) {
  const [searchQuery, setsearchQuery] = useState("");
  const [userdata, setuserdata] = useState([...data]);

  useEffect(() => {
    setuserdata([...data]);
  }, [data]);
  const handleSearch = (e) => {
    console.log("in searchclick");
    let query = e.target.value;
    //setsearchQuery(e.target.value);
    setuserdata(getMatchedUser(query));
  };
  const getMatchedUser = (query) => {
    let temp = data.filter(
      (user) =>
        user["id"].toString().includes(query) ||
        user["first_name"].toString()?.includes(query) ||
        user["last_name"].toString()?.includes(query) ||
        user["email"].toString()?.includes(query)
    );
    return temp;
  };
  return (
    <div className="table_container">
      <div className="search">
        <input
          //value={searchQuery}
          onChange={handleSearch}
          type="text"
          placeholder="Enter user info"
        />
      </div>
      <div className="table_loadhere">
        <table>
          <tbody>
            {userdata.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <img src={user.avatar} alt={user.id} />
                  </td>
                  <td>
                    <strong>
                      {user["first_name"] + " " + user["last_name"]}
                    </strong>
                    <p>{user.email}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
