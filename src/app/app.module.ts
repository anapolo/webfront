import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ModuleComponent } from './pages/settings/module/module.component';
import { Administration1Component } from './pages/administration1/administration1.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { RolesComponent } from './pages/administration/roles/roles.component';
import { SettingComponent } from './pages/setting/setting.component';
import { CategoriesComponent } from './pages/setting/categories/categories.component';
import { AuthorsComponent } from './pages/setting/authors/authors.component';
import { AreasComponent } from './pages/setting/areas/areas.component';
import { SectionsComponent } from './pages/setting/sections/sections.component';
import { BooksComponent } from './pages/setting/books/books.component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, DashboardComponent, PagesComponent, AdministrationComponent, SettingsComponent, ModuleComponent, Administration1Component, UsersComponent, RolesComponent, SettingComponent, CategoriesComponent, AuthorsComponent, AreasComponent, SectionsComponent, BooksComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
