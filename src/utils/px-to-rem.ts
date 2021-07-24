import { browserContext } from "src/styles/theme/typography";

/**
 * Take value in pixel and return in rem
 * @param value: number
 * @returns string like 1rem
 */
export const rem = (value: number): string => `${value / browserContext}rem`;
