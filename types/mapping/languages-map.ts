import { LanguagesEnums } from "../enums/languages-enum";

interface props {
  name: string;
}

export const languagesMap: Readonly<Record<LanguagesEnums, props>> = {
  [LanguagesEnums.EN]: {name: "en" },
  [LanguagesEnums.AR]: { name: "ar" },
};
