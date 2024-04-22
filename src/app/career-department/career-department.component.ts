import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CareerDepartmentService } from '../services/career-department/career-department.service';
import { MaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-career-department',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, HttpClientModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './career-department.component.html',
  styleUrl: './career-department.component.css'
})
export class CareerDepartmentComponent implements OnInit {
careerDepartmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private careerDepartmentService: CareerDepartmentService
  ) { }

  ngOnInit(): void {
    this.careerDepartmentForm = this.fb.group({
      careerDepartment: ['', Validators.required],
      status: [true],
      txUser: ['', Validators.required],
      txDate: ['', Validators.required],
      txHost: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.careerDepartmentForm.valid) {
      const data = this.careerDepartmentForm.value;
      this.careerDepartmentService.guardarCareerDepartment(data).subscribe(
        response => {
          console.log('Datos guardados con éxito', response);
          // Aquí podrías agregar código adicional, como navegar a otra página o mostrar un mensaje de éxito.
        },
        error => {
          console.error('Error al guardar los datos', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
}
