import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditPostComponent } from './shared/edit-post/edit-post.component';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './shared/post/post.component';
import { HomeComponent } from './pages/home/home.component';
import { postService } from './services/post.service';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms'
const appRoutes: Routes = [
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [AppComponent, EditPostComponent, PostComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule],
  providers: [postService],
  bootstrap: [AppComponent],
})
export class AppModule {}
