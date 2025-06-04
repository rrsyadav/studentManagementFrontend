import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstudentComponent } from './searchstudent.component';

describe('SearchstudentComponent', () => {
  let component: SearchstudentComponent;
  let fixture: ComponentFixture<SearchstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
