import { Company, companyService } from "./CompanyService";
import { delay } from "../utils/delay";

export const getCompanies = async (): Promise<Company[]> => {
  await delay();
  return companyService.getCompanies();
};

export const deleteCompany = async (id: number): Promise<void> => {
  await delay();
  companyService.deleteCompany(id);
};
