import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvatarCaminhoDaAguaPage } from './avatar-caminho-da-agua.page';

describe('AvatarCaminhoDaAguaPage', () => {
  let component: AvatarCaminhoDaAguaPage;
  let fixture: ComponentFixture<AvatarCaminhoDaAguaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarCaminhoDaAguaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarCaminhoDaAguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
