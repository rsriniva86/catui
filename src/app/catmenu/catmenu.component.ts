import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CatService } from '../cat.service';
import { CatIdentifiers } from './catinterfaces';
import { CatInfo } from './catinterfaces';

@Component({
  selector: 'app-catmenu',
  templateUrl: './catmenu.component.html',
  styleUrls: ['./catmenu.component.scss']
})
export class CatmenuComponent implements OnInit {

  catBreeds: any;
  isBreedSelected: boolean;
  selectedBreed: CatIdentifiers[] = [];
  selectedCatBreedInfo: CatInfo[] = []
  catimage: any;
  catimageid: string;

  constructor(private service: CatService, private sanitizer: DomSanitizer) {
    this.isBreedSelected = false;
    this.catimageid = "";
  }

  ngOnInit(): void {
    this.service.getBreeds().subscribe(
      (responseData) => {
        //console.log(responseData);
        this.catBreeds = responseData;
      }
    );
  }

  public selectBreed(breed: CatIdentifiers): void {
    this.selectedBreed = [breed];
    console.log(this.selectedBreed[0].name);
    this.isBreedSelected = true;
    this.selectedCatBreedInfo = [];
    this.service.getDetailsOfBreed(breed.id).subscribe(
      (responseData) => {
        console.log(responseData);
        this.selectedCatBreedInfo = responseData;
        let imageURL = this.selectedCatBreedInfo[0].url;
        this.catimageid = this.selectedCatBreedInfo[0].id;
        this.catimage = this.sanitizer.bypassSecurityTrustUrl(imageURL);
        console.log('image url:' + this.selectedCatBreedInfo[0].url);
        console.log('description:' + this.selectedCatBreedInfo[0].breeds[0].description);
      }
    );

  }



}
