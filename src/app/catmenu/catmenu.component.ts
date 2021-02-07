import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-catmenu',
  templateUrl: './catmenu.component.html',
  styleUrls: ['./catmenu.component.scss']
})
export class CatmenuComponent implements OnInit {

  catBreeds:any;
  constructor(private service:CatService) {
    
   }

  ngOnInit(): void {
    this.service.getCatBreeds().subscribe(
      (responseData)=>{
          console.log(responseData);
          this.catBreeds=responseData;
      }
    );
  }

}
