import {IncomeData} from "@/data/companies";

export type OrganizationType = 'ЮЛ' | 'ФЗ' | 'ИП';
export type StatusType = 'active' | 'closed';

export interface Company {
    bin: string;
    name: string;
    address: string;
    city: string;
    activity: string;
    leader: string;
    status: StatusType;
    organization: OrganizationType;
    incomes: IncomeData[];
}

export interface IncomeData {
    year: number;
    monthly: number[];
    quarterly: number[];
}