/* eslint-disable @typescript-eslint/no-explicit-any */
export const tw = (strings: any, ...values: any[]) => String.raw({ raw: strings }, ...values);
