import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../services/api";

export function CompanyDetails() {
  const { id } = useParams();
  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-4">
          <Link to="/" className="text-primary hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
        <div className="bg-base-200 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold">Employees</h2>
              <p>{company.employees}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
