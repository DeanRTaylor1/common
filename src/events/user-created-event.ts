import { Subjects } from './subjects';

export interface OrderCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    username: string;
    email: string;
  };
}
