export interface Token {
  token: string;
}


export class Patient {
  id: string;

  weight: string;
  height: string;
  date_of_birth: Date;

  guardianName: string;
  guardianContact: string;
  guardianRelationShip: string;
  guardianAddress: string;
}


export interface User {
  id: string;

  email: string;
  contact: string;
  cnic: string;
  emergencyContact: string;

  first_name: string;
  middle_name: string;
  last_name: string;

  city: string;
  country: string;
  address: string;

  gender: string;
  group: string;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;

  patient: Patient;
}


export interface MedicalHistory {
  id: string;

  type: string;
  description: string;
  happenedAt: Date;

  patient: User;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}


export interface Allergy {
  id: string;

  name: string;
  description: string;

  patient: User;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}


export interface Prescription {
  id: string;

  medicine: string;
  dose: string;
  frequency: string;
  notes: string;

  patient: User;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}


export interface Visit {
  id: string;

  purpose: string;
  visitedAt: Date;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
