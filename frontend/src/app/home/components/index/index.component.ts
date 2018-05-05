import { Component, OnInit } from '@angular/core';
import { MainHeaderComponent } from '../../../common/components';

import { BinanceService } from '../../../common/services';

import { Depth, Symbols } from '../../../common/models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [BinanceService]
})
export class IndexComponent implements OnInit {
  public depth: Depth;

  constructor(
    public binanceService: BinanceService,
  ) {}

  ngOnInit() {
    this.binanceService.auth()
      .subscribe((result) => {
        this.depth = result.json();
        console.log(this.depth);
      });
  }

  updateSymbols() {

  }

}
