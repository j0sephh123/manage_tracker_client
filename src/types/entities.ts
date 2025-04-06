export type Employee = {
  id: string;
  name: string;
};

export const generateEmployeeId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export type Company = {
  id: string;
  name: string;
  employees: Employee[];
};
