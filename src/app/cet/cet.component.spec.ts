import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetComponent } from './cet.component';

describe('CetComponent', () => {
  let component: CetComponent;
  let fixture: ComponentFixture<CetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
