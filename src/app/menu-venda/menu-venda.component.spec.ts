import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVendaComponent } from './menu-venda.component';

describe('MenuVendaComponent', () => {
  let component: MenuVendaComponent;
  let fixture: ComponentFixture<MenuVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
