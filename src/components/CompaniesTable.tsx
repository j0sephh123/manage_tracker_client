import { Link } from "react-router-dom";
import { useCompanyStore } from "../store/companyStore";

export function CompaniesTable() {
  const { companies, removeCompany } = useCompanyStore();

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>
                <Link
                  to={`/companies/${company.id}`}
                  className="link link-primary"
                >
                  {company.name}
                </Link>
              </td>
              <td>{company.employees}</td>
              <td>
                <button
                  className="btn btn-error btn-soft btn-sm"
                  onClick={() => removeCompany(company.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
