import { useParams } from "react-router-dom";
import { useCompanyStore } from "../store/companyStore";

export function CompanyDetails() {
  const { id } = useParams();
  const { companies } = useCompanyStore();
  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
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
