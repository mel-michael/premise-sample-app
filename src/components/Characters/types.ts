export enum Status {
  'Alive',
  'Deceased',
  'Presumed dead'
}

export type Character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: keyof typeof Status;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
};
