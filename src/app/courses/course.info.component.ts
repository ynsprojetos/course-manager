import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: '../courses/course.info.component.html'
})
export class CourseInfoComponent implements OnInit {


courseID: Number = 0;

constructor(private activatedRoute: ActivatedRoute){}

ngOnInit(): void {
 this.courseID = Number(this.activatedRoute.snapshot.paramMap.get('id'))
}

}
