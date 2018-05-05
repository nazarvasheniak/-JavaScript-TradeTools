import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { MainHeaderComponent, LangSwitcherComponent } from '../common/components';

import { BinanceService } from './services';

@NgModule({
    declarations: [
        MainHeaderComponent,
        LangSwitcherComponent
    ],
    imports: [
        HttpModule
    ],
    exports: [
        MainHeaderComponent,
        LangSwitcherComponent
    ],
    bootstrap: [
        MainHeaderComponent,
        LangSwitcherComponent
    ],
    providers: [
        BinanceService
    ],
})
export class TTCommonModule {}