import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriformsComponent } from './naukriforms.component';

describe('NaukriformsComponent', () => {
  let component: NaukriformsComponent;
  let fixture: ComponentFixture<NaukriformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukriformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
