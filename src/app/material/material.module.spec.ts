import { TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';

describe('Material Module', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [],
    }).compileComponents();
  });

  it('should create Material Module', () => {
    expect(MaterialModule).toBeTruthy();
  });
});
