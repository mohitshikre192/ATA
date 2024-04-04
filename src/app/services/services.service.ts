import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
private functionurl:string= "https://localhost:7034/api/Vehicle";
 public getAllVehicles(){

    return this.http.get<Vehicle[]>(this.functionurl).pipe(catchError(this.handleError));
  }
  public getAllVehiclesByType(type:string)
  {

  }

  public getAllVehicleBySearchTerm(search:string)
  {}


  // private handleError(error: HttpErrorResponse) {

  //   let errorMsg: string = "";
  //   if (error.error instanceof ErrorEvent) {
  //     // Client Error
  //     errorMsg = "Error: $error.error.message"
  //   }
  //   else {
  //     // Server Error
  //     errorMsg = "Status: $(error.status) \n Message: error.message"
  //   }
  //   return throwError(errorMsg);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
