import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoContatosComponent } from './edicao-contatos.component';

describe('EdicaoContatosComponent', () => {
  let component: EdicaoContatosComponent;
  let fixture: ComponentFixture<EdicaoContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
