import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistrosComponent } from './sinistros.component';

describe('SinistrosComponent', () => {
  let component: SinistrosComponent;
  let fixture: ComponentFixture<SinistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
