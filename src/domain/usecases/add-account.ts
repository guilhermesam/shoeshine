export interface AddAccount {
  add: (account: AddAccountParams) => Promise<boolean>
}

export interface AddAccountParams {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}