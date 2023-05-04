export enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type SignUpUser = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}
