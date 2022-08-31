import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgaComponent } from './sga.component';

describe('SgaComponent', () => {
  let component: SgaComponent;
  let fixture: ComponentFixture<SgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
