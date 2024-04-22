import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, HttpClientModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
 personaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonService
  ) { }

 ngOnInit(): void {
    this.personaForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mothersLastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identityGender: ['', Validators.required],
      birthGender: ['', Validators.required],
      address: [''],
      ciNumber: [''],
      ciComplement: [''],
      ciExtension: [''],
      status: [false],
      txUser: [''],
      txDate: [new Date()],
      txHost: ['']
    });
  }
  guardar(): void {
    if (this.personaForm.valid) {
      const persona = this.personaForm.value;
      this.personaService.guardarPersona(persona).subscribe(
        response => {
          console.log('Persona guardada con éxito', response);
        },
        error => {
          console.error('Error al guardar la persona', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
}
