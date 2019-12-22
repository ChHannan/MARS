export interface Token {
  token: string;
}


export interface Admin {
  id: string;

  date_joined: Date;
  start_timings: Date;
  end_timings: Date;
}


export interface Nurse {
  id: string;

  qualification: string;
  institution: string;
  date_joined: Date;
  start_timings: Date;
  end_timings: Date;
}


export interface Doctor {
  id: string;

  speciality: string;
  qualification: string;
  medical_college: string;
  date_joined: Date;
  start_timings: Date;
  end_timings: Date;
  nurse_assigned: Nurse;
}


export interface Patient {
  id: string;

  weight: string;
  height: string;
  date_of_birth: Date;

  guardian_name: string;
  guardian_contact: string;
  guardian_relationShip: string;
  guardian_address: string;
}


export interface User {
  id: string;

  email: string;
  contact: string;
  cnic: string;
  emergency_contact: string;

  first_name: string;
  middle_name: string;
  last_name: string;

  city: string;
  country: string;
  address: string;

  gender: string;
  group: string;
  role: any;

  created_at: Date;
  updated_at: Date;
  created_by: User;
  updated_by: User;

  patient: Patient;
}


export interface MedicalHistory {
  id: string;

  type: string;
  description: string;
  happened_at: Date;

  patient: User;

  created_at: Date;
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
  visited_at: Date;

  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
