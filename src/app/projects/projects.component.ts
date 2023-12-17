import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResizableDirective } from 'angular-resizable-element';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  tareas: {
    id: number;
    descripcion: string;
    completada: boolean;
    asignada: string;
  }[] = [
    {
      id: 1,
      descripcion: 'Salvar el mundo',
      completada: false,
      asignada: 'Spiderman',
    },
    {
      id: 2,
      descripcion: 'Aprender Angular',
      completada: true,
      asignada: 'Peter Parker',
    },
    // Agrega más tareas según sea necesario
  ];

  columnas: (keyof {
    id: number;
    descripcion: string;
    completada: boolean;
    asignada: string;
  })[] = ['id', 'descripcion', 'completada', 'asignada'];

  @ViewChildren(ResizableDirective)
  resizableColumns: QueryList<ResizableDirective> | undefined;

  onResizeEnd(column: string, newWidth: number) {
    // Puedes manejar la lógica después de que se redimensiona la columna aquí
    console.log(`Columna ${column} redimensionada a ${newWidth}px`);
  }
}
