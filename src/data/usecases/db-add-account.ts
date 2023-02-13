import { AddAccount, AddAccountParams } from "@/domain/usecases";
import { AccountRepository, Hasher } from "@/data/protocols";

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AccountRepository
  ){}

  async add(accountData: AddAccountParams): Promise<boolean> {
    const userExists = this.addAccountRepository.checkByEmail(accountData.email)
    let isValid = false

    if (!userExists) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      isValid = await this.addAccountRepository.create({ ...accountData, password: hashedPassword })
    }

    return isValid
  }
}