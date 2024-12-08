export type Languages = Record<string, LanguageContent>;

export interface LanguageContent {
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

export interface RequestedCurrency {
  id: string;
  rate: number;
  label: {
    EN: string;
    PL: string;
  },
  checked: boolean;
}

export interface ApiCurrency {
  code: string;
  value: number;
}

export type ApiCurrencyDictionary = Record<ApiCurrency['code'], ApiCurrency>

export interface ApiCurrencyResponse {
  data: ApiCurrencyDictionary;
  meta: {
    last_updated_at: string;
  }
}
