
export type UserRole = 'guide' | 'agency' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profileImage?: string;
  createdAt: Date;
}

export interface Guide extends User {
  role: 'guide';
  languages: string[];
  description: string;
  services: Service[];
  location: string;
  rating: number;
  availability: Availability[];
  paymentTerms: PaymentTerms;
  reviews: Review[];
}

export interface Agency extends User {
  role: 'agency';
  companyName: string;
  location: string;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in hours
  price: number;
  currency: string;
  maxGroupSize?: number;
}

export interface Availability {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export interface PaymentTerms {
  acceptsAdvancePayment: boolean;
  advancePercentage?: number;
  cancellationPolicy: string;
  acceptedPaymentMethods: string[];
}

export interface Booking {
  id: string;
  guideId: string;
  agencyId: string;
  serviceId: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'completed' | 'cancelled';
  numberOfPeople: number;
  totalPrice: number;
  createdAt: Date;
  notes?: string;
}

export interface Review {
  id: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  authorId: string;
  authorType: 'guide' | 'agency';
}

export interface Message {
  id: string;
  senderId: string;
  senderRole: UserRole;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}
