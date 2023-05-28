interface IReceptionItem {
  reception: IReception;
  doctor: IDoctor;
  appointment: IAppointment;
}

interface IReception {
  date: string;
  id: string;
  diagnosis: string;
  status: string;
}

interface IDoctor {
  specialization: string;
  name: string;
  id: string;
}
interface IAppointment {
  research: Array<string>;
  count: number;
}
export interface IPaginationParams {
  limit: number;
  offset: number;
  totalSize: number;
}

export interface IReceptions {
  items: IReceptionItem[];
}
