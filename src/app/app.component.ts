import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';  // Here I have kept a recipe as default to show the recipe page on the load up

  onNavigate(feature: String) {
   this.loadedFeature = (feature).toString();
   console.log(feature);
  }


}
