export interface TranslateConfigInterface {
  $schema: string;
  sourceLocaleFile: string;
  locales: {
    [id: string]: string;
  };
}
