import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'user', component: UserComponent,
    children: [
            {
                path: 'signIn',
                component: SigninComponent,
            },
            {
                path: 'signUp',
                component: SignUpComponent,
            },
            { path: '', redirectTo: '/user/signIn', pathMatch: 'full' },
        ]
  },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
                    enableTracing: true
                })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
