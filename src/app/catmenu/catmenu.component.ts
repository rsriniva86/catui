import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { cat } from './cat';

@Component({
  selector: 'app-catmenu',
  templateUrl: './catmenu.component.html',
  styleUrls: ['./catmenu.component.scss']
})
export class CatmenuComponent implements OnInit {

  catBreeds:any;
  isBreedSelected:boolean;
  selectedBreed:cat[]=[];
  constructor(private service:CatService) {  
    this.isBreedSelected=false;  
   }

  ngOnInit(): void {
    this.service.getCatBreeds().subscribe(
      (responseData)=>{
          //console.log(responseData);
          this.catBreeds=responseData;
      }
    );
  }

  public selectBreed(breed:cat):void{

    this.selectedBreed=[breed];
    console.log(this.selectedBreed[0].name);
    this.isBreedSelected=true;
  }

}
