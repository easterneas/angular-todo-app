import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestButtonComponent } from './test-button.component';

describe('TestButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a name of "Klik aku mas"`, () => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.name).toBe('Klik aku mas')
  })

  it(`should create a button with name`, () => {
    fixture = TestBed.createComponent(TestButtonComponent);
    fixture.detectChanges();
    const compiledElement = fixture.nativeElement as HTMLElement;

    expect(compiledElement.querySelector('button')?.textContent).toBe('Klik aku mas');
  })
});
