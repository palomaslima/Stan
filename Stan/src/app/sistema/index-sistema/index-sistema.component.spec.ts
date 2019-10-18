import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSistemaComponent } from './index-sistema.component';

describe('IndexSistemaComponent', () => {
  let component: IndexSistemaComponent;
  let fixture: ComponentFixture<IndexSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
