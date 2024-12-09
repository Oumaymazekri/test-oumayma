import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { PostItemComponent } from './components/post-item/post-item.component';
const routes: Routes = [
  { path: '', redirectTo: 'PostList', pathMatch: 'full' }, // Redirection vers PostList par défaut
  { path: 'PostList', component: PostListComponent },
  { path: 'PostItem', component: PostItemComponent },
  { path: 'Authentification', component: AuthentificationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
