import { TestBed, inject } from '@angular/core/testing';

import { PanelToComicService } from './panel-to-comic.service';

describe('PanelToComicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelToComicService]
    });
  });

  it('should be created', inject([PanelToComicService], (service: PanelToComicService) => {
    expect(service).toBeTruthy();
  }));
});
