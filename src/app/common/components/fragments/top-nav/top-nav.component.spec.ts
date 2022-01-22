import { RouterTestingModule } from '@angular/router/testing';
import { NavigationStart } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ TopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should hide mobile menu by default', () => {
    expect(component.config.mobileMenu).toBeFalse();
  });
});
