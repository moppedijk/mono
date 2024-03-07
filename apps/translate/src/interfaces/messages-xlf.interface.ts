export interface MessagesXLFInterface {
  file: {
    body: {
      ['trans-unit']: {
        id: string;
        source: string;
      }[];
    };
  };
}
