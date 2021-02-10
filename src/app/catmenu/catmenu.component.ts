import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CatService } from '../cat.service';
import { cat } from './cat';
import { catinfo } from './catinfo';

@Component({
  selector: 'app-catmenu',
  templateUrl: './catmenu.component.html',
  styleUrls: ['./catmenu.component.scss']
})
export class CatmenuComponent implements OnInit {

  catBreeds: any;
  isBreedSelected: boolean;
  selectedBreed: cat[] = [];
  selectedCatBreedInfo: catinfo[] = []
  catimage: any;
  catimageheight: number;
  catimagewidth: number;
  catimageid: string;

  constructor(private service: CatService, private sanitizer: DomSanitizer) {
    this.isBreedSelected = false;
    this.catimageheight = 0;
    this.catimagewidth = 0;
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

  public selectBreed(breed: cat): void {
    this.selectedBreed = [breed];
    console.log(this.selectedBreed[0].name);
    this.isBreedSelected = true;
    this.selectedCatBreedInfo = [];
    this.service.getDetailsOfBreed(breed.id).subscribe(
      (responseData) => {
        console.log(responseData);
        this.selectedCatBreedInfo = responseData;
        let imageURL = this.selectedCatBreedInfo[0].url;
        this.catimageheight = 500 * (this.selectedCatBreedInfo[0].height /
        this.selectedCatBreedInfo[0].width);
        this.catimageid = this.selectedCatBreedInfo[0].id;
        this.catimage = this.sanitizer.bypassSecurityTrustUrl(imageURL);
        console.log('image url:' + this.selectedCatBreedInfo[0].url);
        console.log('description:' + this.selectedCatBreedInfo[0].breeds[0].description);
      }
    );

  }



}
