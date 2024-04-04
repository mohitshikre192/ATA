import { Component } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { ServicesService } from '../../../services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {


 vehicles:Vehicle[] = [];
constructor(private service:ServicesService,activatedRoute:ActivatedRoute){
// activatedRoute.params.subscribe((params) => {
//   if (params.searchTerm)
//     this.vehicles = this.service.getAllVehicleBySearchTerm(params.searchTerm);
//   else if (params.v_type)
//     this.vehicles = this.service.getAllVehiclesByType(params.tag);
//   else
//     this.vehicles = this.service.getAllVehicles();
// })
}
ngOnInit():void{

this.service.getAllVehicles().subscribe(result => {
  this.vehicles = result;
})
console.log(this.vehicles);
}

}
