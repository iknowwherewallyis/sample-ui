import { Component } from '@angular/core';

@Component({
// Other component properties removed
  template: `
  <h1>{{title}}</h1>
  <p>How are you dong?</p>
  `,
})

export class AppComponent {

  title = 'Tour of Heroes';
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

}
