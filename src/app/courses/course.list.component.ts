import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course.list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

ngOnInit(): void {
 this.courses = [ {
  id: 1,
  name: 'Angular: Forms',
  imageUrl: '/assets/images/forms.png',
  price: 100,
  code: '4321',
  duration: 100,
  rating: 100,
  realeaseDate: 'November, 24, 2021'
 },
 {
  id: 2,
  name: 'Angular: Http',
  imageUrl: '/assets/images/http.png',
  price: 100,
  code: '1234',
  duration: 100,
  rating: 100,
  realeaseDate: 'November, 24, 2021'
 }]

console.log(this.courses)
}

}
