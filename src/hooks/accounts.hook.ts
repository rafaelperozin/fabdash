import { useContext } from "react";

import { Accounts } from "src/api/users/users.model";
import { UserContext } from "src/contexts/user.context";

interface UseAccounts {
  getAccount: (id: string) => Accounts | undefined;
}

export const useAccounts = (): UseAccounts => {
  const { user } = useContext(UserContext);

  /**
   * NOTE: I recommend to do it in the store but this is a test, and
   * NOTE: I consider important to show that I know how to create custom hooks.
   * NOTE: It's extremely important to help keeping the code clean and reusable.
   */
  const getAccount = (id: string): Accounts | undefined =>
    user.accounts.find((account: Accounts) => account.account_id === id);

  return { getAccount };
};
