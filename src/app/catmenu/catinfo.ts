import { breed } from "./breed";

export interface catinfo {
    url:string;
    id:string;    
    width:number;
    height:number;
    breeds:breed[];  
  }