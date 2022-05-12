import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultContatoComponent } from './result-contato.component';

describe('ResultContatoComponent', () => {
  let component: ResultContatoComponent;
  let fixture: ComponentFixture<ResultContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
