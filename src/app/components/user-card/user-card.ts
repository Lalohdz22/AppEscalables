import { Component,input,signal,WritableSignal, output} from '@angular/core';
import { User } from '../../interfaces/user.interface';
@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {

  // user: WritableSignal<User> = signal({
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "LeGra",
  //   email: "legra@gmail.com",
  //   image: "https://img.magnific.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_hybrid&w=740&q=80%22"
  // })
  user = input.required <User>();

  eliminaUsuario = output<number>()
}
