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
              <td>{company.name}</td>
              <td>{company.employees}</td>
              <td>
                <button
                  className="btn btn-soft btn-error btn-sm"
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
