import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CommonService } from '../../service/common.service';

@Component({
    selector: 'app-lazy-view',
    template: `
    <h3>This is content from a lazy-loaded route</h3>
    <div>Check your Networks tab to see that the js file got loaded</div>
    <br>
    <div><em>/lazy/nested/</em> routes to the same page</div>
  `
})
export class LazyComponent {}

@NgModule({
    declarations: [LazyComponent,AboutComponent],
    providers: [CommonService],
    imports: [RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full' }, 
      { path: 'about', component: AboutComponent }
    ])]
})
export class LazyModule {}
