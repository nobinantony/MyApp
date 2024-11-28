import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  districts = [
    {
      id : 1,
      title : 'Trivandram',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFC4otFQP3ZnKQBd1EVxQMKXDrvAVrYKSlA&s',
      description : 'Thiruvananthapuram formerly known as Trivandrum, is the capital city of the Indian state of Kerala.'
    }, 
    {
      id : 2,
      title : 'Eranakulam',
      image : 'https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/ekm.jpg',
      description : 'Ernakulam is the central business district of the city of Kochi, Kerala, India'
    }, 
    {
      id : 3,
      title : 'Thrissur',
      image : 'https://www.keralatourism.org/images/festivals/large/20170330115924_321_1.jpg',
      description : 'a city and the headquarters of the Thrissur district in Kerala, India. It is the third largest urban agglomeration in Kerala after Kochi and Kozhikode.'
    }, 
    {
      id : 4,
      title : 'Alappuzha',
      image : 'https://www.shutterstock.com/image-photo/alappuzha-kerala-india-november-15-600nw-2483760103.jpg',
      description : 'Today, Alappuzha is a prominent tourist destination in Kerala'
    }, 
    {
      id : 5,
      title : 'Kollam',
      image : 'https://i.ytimg.com/vi/Ngy2hLzrkxw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVmgo2JnFaOEhAsGOxO5FOy4M2EA',
      description : 'an ancient seaport and the fourth largest city in the Indian state of Kerala. Located on the southern tip of the Malabar Coast of the Arabian Sea.'
    }  
  ]
}
