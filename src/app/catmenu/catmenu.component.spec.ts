import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatmenuComponent } from './catmenu.component';

describe('CatmenuComponent', () => {
  let component: CatmenuComponent;
  let fixture: ComponentFixture<CatmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
