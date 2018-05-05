import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { IndexComponent, AuthComponent } from './components';

@NgModule({
    declarations: [
        IndexComponent,
        AuthComponent
    ],
    exports: [
        IndexComponent,
        AuthComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class HomeModule {}