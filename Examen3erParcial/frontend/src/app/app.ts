import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotaService } from './nota.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  notaService = inject(NotaService);

  titulo = '';
  contenido = '';

  ngOnInit() {
    this.notaService.cargarNotas();
  }

  guardar() {
    if (!this.titulo.trim() || !this.contenido.trim()) return;

    this.notaService.agregarNota({
      titulo: this.titulo,
      contenido: this.contenido
    });

    this.titulo = '';
    this.contenido = '';
  }
}