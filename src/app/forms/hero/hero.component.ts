import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PowersComponent } from '../powers/powers.component';

@Component({
  standalone: false,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @ViewChild(PowersComponent, { static: true })
    public powersComponent!: PowersComponent;
  public heroForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      heroName: ['', Validators.required],
      aka: ['', Validators.required],
      powers: this.powersComponent.createFormGroup(),
      hobbies: this.formBuilder.group({
        favoriteHobby: ['', Validators.required]
      }),
      lessons: this.formBuilder.array([]),
    })
  }

  public get lessons() {
    return this.heroForm.controls['lessons'] as FormArray;
  }

  public get hobbiesForm(): FormGroup {
    return this.heroForm.get("hobbies") as FormGroup;
  }

  public addLesson() {
    const lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required],
    });

    this.lessons.push(lessonForm);
  }

  public deleteLesson(index: number) {
    this.lessons.removeAt(index);
  }

  public toFormGroup(group: any) {
    return group as FormGroup;
  }

  public logFormData(): void {
    console.log(this.heroForm.value);
  }
}
