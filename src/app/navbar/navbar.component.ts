import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'

})
export class NavbarComponent implements OnInit {
  constructor(){}

      ngOnInit(): void{


  }

}
