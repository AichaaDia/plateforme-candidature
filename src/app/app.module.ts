// @ts-ignore
import { FormsModule } from '@angular/forms';
import {NgModule} from "@angular/core";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  imports: [
    FormsModule,
    FooterComponent
    // autres imports...
  ]
})
export class AppModule { }
