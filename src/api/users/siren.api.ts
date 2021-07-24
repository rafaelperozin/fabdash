import axios from "axios";

export const sirenNumber = Number(process.env.REACT_APP_TEMP_SIREN)!;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchSiren = async (): Promise<any> =>
  await axios.get(
    `${process.env.REACT_APP_SIREN_API}/unites_legales/${sirenNumber}`
  );

export const getAddress = (): Promise<string> =>
  fetchSiren().then(
    ({ data }) => data.unite_legale.etablissement_siege.geo_adresse
  );
