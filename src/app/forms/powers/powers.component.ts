import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrl: './powers.component.css'
})
export class PowersComponent {

  public createFormGroup(): FormGroup {
    return new FormGroup({});
  }
}
