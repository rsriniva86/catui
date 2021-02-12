export interface CatIdentifiers {
  name: string;
  id:string;    
}
export interface CatBreed {
    id:string,
    name:string,
    child_friendly:number,
    description:string,
    wikipedia_url:string,
    vcahospitals_url:string;    
}
export interface CatInfo {
  url:string;
  id:string;    
  width:number;
  height:number;
  breeds:CatBreed[];  
}