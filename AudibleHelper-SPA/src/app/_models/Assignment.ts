import { User } from './user';

export interface Assignment {
  id: number;
  assignedToId: number;
  bookAsin: string;
  country: string;
  assignedDate: Date;
  assignedTo: User;
  totalCodes: number;
  createdBy: string;
  createdOn: Date;
  lastModifiedBy: string;
  lastModifiedOn: Date;
  startingRating: number;
  isCompleted: boolean;
}
