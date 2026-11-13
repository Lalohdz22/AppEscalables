import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Nota {
  _id?: string;
  titulo: string;
  contenido: string;
}

@Injectable({ providedIn: 'root' })
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/notas';
  notas = signal<Nota[]>([]);
  cargarNotas() {
    this.http.get<Nota[]>(this.apiUrl).subscribe({
      next: (data) => this.notas.set(data),
      error: (err) => console.error('Error al cargar notas', err)
    });
  }

  
  agregarNota(nuevaNota: Nota) {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe({
      next: (notaCreada) => this.notas.update((lista) => [...lista, notaCreada]),
      error: (err) => console.error('Error al guardar nota', err)
    });
  }
}