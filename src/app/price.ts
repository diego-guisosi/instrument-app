export interface Price {

  symbol: string;
  series: Serie[];

}

export interface Serie {

  date: Date;
  price: number;

}
