import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public Aboutus: string = "About Us";
  public DesingClothes: string = "Desing Clothes.";
  public Parrafo1:string =  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quam nihil minima quidem accusantium sunt rerum, tenetur delectus sit similique maxime eum odit asperiores dolorem. Odit, odio. Exercitationem sunt aliquid culpa dignissimos neque illo vitae vel maiores obcaecati, soluta dolores minus. Dolor nesciunt blanditiis aspernatur quia enim maiores rerum eaque libero atque corporis unde consequuntur exercitationem laudantium quos deserunt accusamus molestias ut itaque nisi, doloribus, cumque voluptatum dolore id. Omnis et eligendi explicabo quas fugit mollitia reprehenderit odit cumque optio maiores earum sequi dolorem dignissimos, velit expedita odio sed ducimus ea, repellat eos incidunt quis animi! Quae, architecto perspiciatis. Aliquid."
  public Parrafo2:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsum voluptatem quae ducimus saepe blanditiis suscipit magnam placeat quo unde aliquid accusamus odit autem rerum, neque minus alias sed beatae quidem velit recusandae doloribus consectetur praesentium! Unde neque eaque ullam soluta quaerat! Ad, laudantium magnam? Perspiciatis, aliquam tempore magnam quia esse nisi nam quaerat nemo laudantium provident necessitatibus ex doloremque. Libero delectus aspernatur voluptates, dolorem consequatur molestias dolorum porro labore laboriosam at! Quia repudiandae expedita saepe. Dolor voluptatem numquam voluptates autem ex! Unde repellat maiores autem, dolor ea molestias maxime quidem nesciunt minima dolorum suscipit facere, inventore vel eligendi ipsum.";

  constructor() { }

  ngOnInit(): void {
  }
  
}
