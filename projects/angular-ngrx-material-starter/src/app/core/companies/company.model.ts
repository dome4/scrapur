export interface Company {
  id: string;
  name: string;
  phone?: string;
  web?: string;
  mail?: string;
  employeeCount?: number;
  location: string;
  validData: boolean;
  addedToHubspot: boolean;
};
