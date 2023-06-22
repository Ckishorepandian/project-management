import { Link } from "react-router-dom";
import tableData from "./Tabledata";

export default function Home() {

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.ID}>
                <td>{data.ID}</td>
                <td>{data.Name}</td>
                <td>{data.Description}</td>
                <td>{data.StartDate}</td>
                <td>{data.EndDate}</td>
                <td>
                  <Link className="btn btn-primary mx-1">View</Link>
                  <Link className="btn btn-outline-primary mx-2">Edit</Link>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}