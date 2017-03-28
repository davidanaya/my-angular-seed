// Feel free to extend this interface
// depending on your app specific config.
export interface IConfig {
  API?: string ;
  ENV?: string;
  BI_BASE_URL?: string;
  DATA_API?: string;
  USE_MOCK?: string;
}

export const Config: IConfig = (env = { 'adnoc-dev': true }) => {
  return {
    API: (() => {
      if (env['adnoc-dev']) return 'https://bidev.adnoc.co.ae/api';
      else return 'API_NOTHING';
    })(),
    BI_BASE_URL: (() => {
      if (env['adnoc-dev']) return 'https://bidev.adnoc.co.ae';
      else return 'BI_BASE_URL_NOTHING';
    })(),
    DATA_API: (() => {
      if (env['adnoc-dev']) return 'https://dataapi.bidev.adnoc.co.ae/analysis/v1';
      else return 'DATA_API_NOTHING';
    })(),
  }
}
