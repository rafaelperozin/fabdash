interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

interface RandomUserPicture {
  thumbnail: string;
  large: string;
  medium: string;
}

export interface RamndomUserAPI {
  name: RandomUserName;
  picture: RandomUserPicture;
}

export interface RandomUserResults {
  results: RamndomUserAPI[];
}

export interface GetRandomUser {
  data: RandomUserResults;
}

export interface MasterAccounts {
  account_id: string;
  account_type: string;
  iban: string;
  swift_bic: string;
  sort_code: string;
  account_number: string;
  currency: string;
  available: number;
  current: number;
  update_timestamp: string;
}
