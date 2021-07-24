export interface SnippetUser {
  name: string;
  image: string;
}

export interface Transactions {
  value: number;
  date: string;
}

export interface Accounts {
  account_type: string;
  account_id: string;
  currency: string;
  balance: number;
  transactions: Transactions[] | [];
}

export interface User {
  name: string;
  image: string;
  siren: number;
  fullAddress: string;
  accounts: Accounts[];
}

/**
 *
 * NOTE: I'm not sure what types of account we will have, so I created an enum to easily controll all types of accounts.
 * NOTE: For the future of the project and to keep it easy to mainting, it's good have all this info in one place.
 */
export enum AccountTypes {
  SAVINGS = "SAVINGS",
  TRANSACTION = "TRANSACTION",
}
