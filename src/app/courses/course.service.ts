import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

retrieveAll(): Course[] {
  return this.courses
}

courses: Course[] = [ {
  id: 1,
  name: 'Angular: Forms',
  imageUrl: '/assets/images/forms.png',
  price: 100,
  code: '4321',
  duration: 100,
  rating: 5,
  realeaseDate: 'November, 24, 2021',
  description: ''
 },
 {
  id: 2,
  name: 'Angular: Http',
  imageUrl: '/assets/images/http.png',
  price: 100,
  code: '1234',
  duration: 100,
  rating: 2,
  realeaseDate: 'November, 24, 2021',
  description: ''
 },
 {
  id: 3,
  name: 'Angular: CLI',
  imageUrl: '/assets/images/cli.png',
  price: 100,
  code: '1234',
  duration: 100,
  rating: 1,
  realeaseDate: 'November, 24, 2021',
  description: ''
 },
 {
  id: 4,
  name: 'Angular: Router',
  imageUrl: '/assets/images/router.png',
  price: 100,
  code: '1234',
  duration: 100,
  rating: 3,
  realeaseDate: 'November, 24, 2021',
  description: ''
 },
 {
  id: 3,
  name: 'Angular: Animations',
  imageUrl: '/assets/images/animations.png',
  price: 100,
  code: '1234',
  duration: 100,
  rating: 1,
  realeaseDate: 'November, 24, 2021',
  description: ''
 }];

}


