import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {

  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  reverse = output<void>();

  onOrderByIdClick(): void{
    //this.users.update(users => users.sort((a, b) => a.id - b.id));
    this.orderByIdClick.emit();
  }

  onOrderByNameClick(): void{
    //this.users.update(users => users.sort((a, b) => a.name.localeCompare(b.name)));
    this.orderByNameClick.emit();
  }

  onReverseClick(): void{
    //this.users.update(users => users.reverse());
    this.reverse.emit();
  }
}
