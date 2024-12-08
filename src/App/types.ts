export type Languages = Record<string, ILanguage>;

export interface ILanguage {
  headerTitle: string;
  inputLabel: string;
  inputPlaceholder: string;
  listTitle: string;
  resultTitle: string;
  resultLabel: string;
  clockLabel: string;
  loadingMessage: string;
  errorMessage: string;
  mainButtonLabel: string;
  resetButtonLabel: string;
  dateLabel: string;
}

export interface ICurrency {
  id: string;
  rate: number;
  label: {
    EN: string;
    PL: string;
  },
  checked: boolean;
}
