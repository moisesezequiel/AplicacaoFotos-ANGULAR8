import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoAuxComponent } from './foto-aux.component';

describe('FotoAuxComponent', () => {
  let component: FotoAuxComponent;
  let fixture: ComponentFixture<FotoAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
