import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackManagerComponent } from './snack-manager.component';

describe('SnackManagerComponent', () => {
  let component: SnackManagerComponent;
  let fixture: ComponentFixture<SnackManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
