import { create } from "zustand";

interface Company {
  id: number;
  name: string;
  industry: string;
  employees: number;
  revenue: number;
}

interface CompanyState {
  companies: Company[];
  addCompany: (company: Omit<Company, "id">) => void;
  removeCompany: (id: number) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  companies: [
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
  ],
  addCompany: (company) =>
    set((state) => ({
      companies: [
        ...state.companies,
        { ...company, id: state.companies.length + 1 },
      ],
    })),
  removeCompany: (id) =>
    set((state) => ({
      companies: state.companies.filter((company) => company.id !== id),
    })),
}));
