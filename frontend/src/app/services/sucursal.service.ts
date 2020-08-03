import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Modelos
import { Sucursal } from '../models/sucursal';

//Observador
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  private sucursales : Sucursal[] = [];
  private sucursalUpdated = new Subject<Sucursal[]>();

  //URL
  readonly URL_API_GIMNASIOS = "http://localhost:3000/gym/gimnasios";
  constructor(private http: HttpClient, private router : Router) { }

  getSucursalesbyGym(gimnasioID){
    this.http
    .get<{success: Boolean, data: any}>(
      `${this.URL_API_GIMNASIOS}/${gimnasioID}/sucursales`
    )
    .pipe(map((res)=> {
      if(res.success === true){
        return res.data.map(sucursal => {
          if(sucursal.gimnasio && gimnasioID){
            return {
              gimnasio: sucursal.gimnasio,
              direccion: sucursal.direccion,
              telefono: sucursal.telefono,
              id: sucursal.id
            }
          }
        })
      }
    }))
    .subscribe(res => {
      this.sucursales = res;
      this.sucursalUpdated.next([...this.sucursales]);
    });
  }

  getSucursalesUpdatedListener(){
    return this.sucursalUpdated.asObservable();
  }
}
