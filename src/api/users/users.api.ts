import axios from "axios";

import { getAccounts } from "src/api/users/accounts";
import { getAddress } from "src/api/users/siren.api";
import { Accounts, SnippetUser, User } from "src/api/users/users.model";
import { GetRandomUser } from "src/api/users/users.response";

export const sirenNumber = Number(process.env.REACT_APP_TEMP_SIREN)!;

export const fetchRandomUser = async (): Promise<GetRandomUser> =>
  await axios.get(
    `${process.env.REACT_APP_RANDOM_USERS_API}/?inc=name,picture`
  );

export const userData = async (): Promise<User> => {
  const user: SnippetUser = await fetchRandomUser().then(({ data }) => {
    const result = data.results[0];
    return {
      name: `${result.name.title} ${result.name.first} ${result.name.last}`,
      image: result.picture.thumbnail,
    };
  });

  const fullAddress: string = await getAddress();
  const accounts: Accounts[] = await getAccounts();

  return {
    name: user.name,
    image: user.image,
    siren: sirenNumber,
    fullAddress: fullAddress,
    accounts: accounts,
  };
};
