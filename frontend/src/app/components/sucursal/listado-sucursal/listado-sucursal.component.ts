import { Component, OnInit, ViewChild } from '@angular/core';

//Angular Material Imports
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

//Own Imports
import {SucursalService} from '../../../services/sucursal.service';
import { Sucursal } from 'src/app/models/sucursal';

import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormularioSucursalComponent } from '../formulario-sucursal/formulario-sucursal.component';

@Component({
  selector: 'app-listado-sucursal',
  templateUrl: './listado-sucursal.component.html',
  styleUrls: ['./listado-sucursal.component.css']
})
export class ListadoSucursalComponent implements OnInit {
  private gimnasioID: String;
  public sucursal: Sucursal[] = [];
  public dataSource: MatTableDataSource<Sucursal>;
  private subscription : Subscription;

  constructor(
    private service: SucursalService,
    private router: ActivatedRoute,
    private dialog: MatDialog) { }
  displayedColumns: string[] = ['direccion', 'telefono','accion'];

  @ViewChild(MatPaginator, {static: true}) paginator : MatPaginator;
  @ViewChild(MatSort, {static: true}) sort : MatSort;

  ngOnInit(): void {
    this.router.paramMap.subscribe((parameters:  ParamMap) => {
      if(parameters.has('gimnasioID')){
        this.gimnasioID = parameters.get('gimnasioID');
        this.service.getSucursalesbyGym(this.gimnasioID);
        this.subscription = this.service.getSucursalesUpdatedListener()
          .subscribe((data : Sucursal[]) => {
            this.sucursal = data;
            this.dataSource = new MatTableDataSource<Sucursal>(this.sucursal);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          })
      }
    });
  }

  applyFilter(event: Event){
    const filtervalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { route: this.router}
    this.dialog.open(FormularioSucursalComponent,dialogConfig);
  }

  deleteSecretary(sucursal: Sucursal){
    console.log(sucursal.id);
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
