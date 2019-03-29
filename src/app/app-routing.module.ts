import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { DashboardEcommerceComponent } from './pages/dashboard-ecommerce/dashboard-ecommerce.component';
import { DashboardBlogComponent } from './pages/dashboard-blog/dashboard-blog.component';
import { Dashboard4Component } from './pages/dashboard-4/dashboard-4.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';


import { FaqComponent } from './pages/faq/faq.component';
import { SearchComponent } from './pages/search/search.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { LoginComponent } from './pages/login/login.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error4042Component } from './pages/error-404-2/error-404-2.component';
import { Error403Component } from './pages/error-403/error-403.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CustomerComponent } from './cypad/customer/customer.component';
import { ProductsComponent } from './cypad/products/products.component';
import { OrdersComponent } from './cypad/orders/orders.component';


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "dashboard_ecommerce",
                component: DashboardEcommerceComponent
            },
            {
                path: "dashboard_blog",
                component: DashboardBlogComponent
            },
            {
                path: "dashboard_4",
                component: Dashboard4Component
            },
            {
                path: "ui/colors",
                component: ColorsComponent
            },
            {
                path: "ui/typography",
                component: TypographyComponent
            },
            {
                path: "ecommerce/dashboard",
                component: DashboardEcommerceComponent
            },
            {
                "path": "faq",
                "component": FaqComponent
            },
            {
                "path": "search",
                "component": SearchComponent
            },
            {
                "path": "timeline",
                "component": TimelineComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
            {
                path: "customer",
                component: CustomerComponent
            },
            {
                path: "products",
                component: ProductsComponent
            },
            {
                path: "orders",
                component: OrdersComponent
            },
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
  
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_404-2",
        "component": Error4042Component
    },
    {
        "path": "error_403",
        "component": Error403Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "maintenance",
        "component": MaintenanceComponent
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    DashboardEcommerceComponent,
    DashboardBlogComponent,
    Dashboard4Component,
    ColorsComponent,
    TypographyComponent,
    FaqComponent,
    SearchComponent,
    TimelineComponent,
    LoginComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    Error404Component,
    Error4042Component,
    Error403Component,
    Error500Component,
    MaintenanceComponent,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
