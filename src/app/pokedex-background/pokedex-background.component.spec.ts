import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexBackgroundComponent } from './pokedex-background.component';

describe('PokedexBackgroundComponent', () => {
  let component: PokedexBackgroundComponent;
  let fixture: ComponentFixture<PokedexBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
