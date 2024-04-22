import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientTypeService } from '../services/patient-type/patient-type.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material-module';

@Component({
  selector: 'app-patient-type',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, HttpClientModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './patient-type.component.html',
  styleUrl: './patient-type.component.css'
})
export class PatientTypeComponent implements OnInit {
 patientTypeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientTypeService: PatientTypeService
  ) { }

  ngOnInit(): void {
    this.patientTypeForm = this.fb.group({
      patientType: ['', Validators.required],
      status: [true, Validators.required],
      txUser: ['', Validators.required],
      txDate: ['', Validators.required],
      txHost: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.patientTypeForm.valid) {
      const patientTypeData = this.patientTypeForm.value;
      this.patientTypeService.guardarPatientType(patientTypeData).subscribe(
        response => {
          console.log('Tipo de paciente guardado con éxito', response);
        },
        error => {
          console.error('Error al guardar el tipo de paciente', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
}
