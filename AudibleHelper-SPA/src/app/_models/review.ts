import { User } from './user';

export interface Review {
  reviewerId: number;
  bookAsin: string;
  penName: string;
  country: string;
  reviewTitle: string;
  reviewDate: Date;
  reviewer: User;
}
