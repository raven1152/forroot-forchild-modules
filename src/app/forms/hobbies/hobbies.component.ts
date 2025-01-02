import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent implements OnInit {
  public hobbiesForm!: FormGroup;
  @Input() parentForm!: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  public ngOnInit(): void {
    this.hobbiesForm = this.controlContainer.control as FormGroup;
  }

  public logForms(): void {
    console.log('Hobbies form', this.hobbiesForm);
    console.log('Parent (Hero) form', this.parentForm);
  }
}
