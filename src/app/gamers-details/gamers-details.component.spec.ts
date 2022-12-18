import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamersDetailsComponent } from './gamers-details.component';

describe('GamersDetailsComponent', () => {
  let component: GamersDetailsComponent;
  let fixture: ComponentFixture<GamersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
