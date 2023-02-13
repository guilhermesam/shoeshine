import { AddAccountParams } from '@/domain/usecases'

export interface AccountRepository {
  create: (data: AddAccountParams) => Promise<boolean>
  checkByEmail: (email: string) => Promise<boolean>
}