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

            <tr>
              <td>101</td>
              <td>Project-1</td>
              <td>Description-1</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>102</td>
              <td>Project-2</td>
              <td>Description-2</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>103</td>
              <td>Project-3</td>
              <td>Description-3</td>
              <td>StartDate</td>
              <td>EndDate</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </div>
  );
}
