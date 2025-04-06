import { Link } from "react-router-dom";
import { useCompanies } from "../hooks/useCompanies";
import { useDeleteCompany } from "../hooks/useDeleteCompany";
import { Loader2 } from "lucide-react";

export function CompaniesTable() {
  const { data: companies = [], isLoading } = useCompanies();
  const { mutate: deleteCompany, isPending, variables } = useDeleteCompany();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

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
                  onClick={() => deleteCompany(company.id)}
                  disabled={isPending && variables === company.id}
                >
                  {isPending && variables === company.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Delete"
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
