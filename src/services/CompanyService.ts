export type Company = {
  id: number;
  name: string;
  industry: string;
  employees: number;
  revenue: number;
};

class CompanyService {
  private companies: Company[] = [
    {
      id: 1,
      name: "TechCorp",
      industry: "Technology",
      employees: 0,
      revenue: 1000000,
    },
    {
      id: 2,
      name: "FinanceCo",
      industry: "Finance",
      employees: 0,
      revenue: 800000,
    },
    {
      id: 3,
      name: "HealthCare Inc",
      industry: "Healthcare",
      employees: 0,
      revenue: 2000000,
    },
  ];

  getCompanies(): Company[] {
    return this.companies;
  }

  deleteCompany(id: number): void {
    this.companies = this.companies.filter((company) => company.id !== id);
  }
}

export const companyService = new CompanyService();
