import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadrastrarComponent } from './cadrastrar.component';

describe('CadrastrarComponent', () => {
  let component: CadrastrarComponent;
  let fixture: ComponentFixture<CadrastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadrastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadrastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
