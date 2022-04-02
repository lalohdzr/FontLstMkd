import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyecto Lst Mkd';
  msgSave = 'Articulo Agregado';
  msgBorrado = 'Articulo Eliminado';
  msgLst = 'Listado Borrado';
  name = 'nicolas';

  lstArt = [];
  nwArt = '';

  changeTitle(){
    this.title = 'Nuevo titulo '; 
  }
  
  addArt(){
    this.lstArt.push(this.nwArt);
    this.nwArt = '';
  }
}
