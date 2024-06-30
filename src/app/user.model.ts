
export interface User {
  fullName: string;
  email: string;
  dob?: string;
  gender?: string;
  password: string;
  interests?: string[];
  experience: number;
}