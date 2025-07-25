import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUsers } from './json-users';

describe('JsonUsers', () => {
  let component: JsonUsers;
  let fixture: ComponentFixture<JsonUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
