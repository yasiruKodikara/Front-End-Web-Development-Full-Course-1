import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDF2Component } from './tdf2.component';

describe('TDF2Component', () => {
  let component: TDF2Component;
  let fixture: ComponentFixture<TDF2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDF2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
