import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterComponentComponent } from './typewriter-component.component';

describe('TypewriterComponentComponent', () => {
  let component: TypewriterComponentComponent;
  let fixture: ComponentFixture<TypewriterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypewriterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypewriterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
