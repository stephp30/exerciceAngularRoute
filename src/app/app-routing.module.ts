import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'skills', component: SkillsComponent},
{ path: 'experiences', component: ExperiencesComponent},
{ path: 'contacts', component: ContactComponent},
{ path: 'todo', component: TodoComponent},
{ path: 'legal', component: LegalComponent},
{ path: 'credits', component: CreditsComponent},
{ path: '**', component: HomeComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
