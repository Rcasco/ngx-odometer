import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TmNgOdometerModule } from 'odometer-ngx';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        TmNgOdometerModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
