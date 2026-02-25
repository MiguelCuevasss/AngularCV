import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {

  educationVisible = true;
  infoVisible = true;
  modoOscuroActivo = false;


  toggleEducation() {
    this.educationVisible = !this.educationVisible;

    const education = document.getElementById('Seccion Numero 3');

    if (education) {
      education.style.display = this.educationVisible ? 'block' : 'none';
    }
  }


  toggleInformacion() {
    this.infoVisible = !this.infoVisible;

    const info = document.getElementById('informacion');

    if (info) {
      info.style.display = this.infoVisible ? 'block' : 'none';
    }
  }


  toggleModoOscuro() {

    this.modoOscuroActivo = !this.modoOscuroActivo;

    if (this.modoOscuroActivo) {
      document.body.classList.add('oscuro');
    }
    else {
      document.body.classList.remove('oscuro');
    }

  }

}