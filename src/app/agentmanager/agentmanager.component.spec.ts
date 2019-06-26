import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentmanagerComponent } from './agentmanager.component';

describe('AgentmanagerComponent', () => {
  let component: AgentmanagerComponent;
  let fixture: ComponentFixture<AgentmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
