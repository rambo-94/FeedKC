import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
headers.append('Content-Type', 'application/json');


const apiUrl1 = 'http://localhost:3000/login';
const apiUrl2 = 'http://localhost:3000/login/register';
const apiUrl3 =  'http://localhost:3000/donate';
const apiUrl4 =  'http://localhost:3000/demog';


@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {
  private donate ="saveDonateDetails";

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message

    return "An error occurred";
  }
  constructor(public client:HttpClient) { }
  checkCred(username: String): Observable<any>  {
    const url = `${apiUrl1}/${username}`;

    return this.client.get(url, {headers})
      .pipe(map(res=>{return res}),
        catchError(this.handleError)
      );
  }

  getDonationDetails(): Observable<any>{
    const url = `${apiUrl3}/` +"getDonateDetails";
    return this.client.get(url).pipe(map(res=>{return res}),catchError(this.handleError));


  }


  saveDonation(donateDetails: any) : Observable<any> {

    const url = `${apiUrl3}/${(this.donate)}`;

    return this.client.post(url, donateDetails,{ headers})
      .pipe(map(res=>{return res}),
        catchError(this.handleError)
      );
  }

  getDemographics(username: String): Observable<any> {
    const url = `${apiUrl4}/${(username)}`;

    return this.client.get(url, {headers})
      .pipe(map(res=>{return res}),
        catchError(this.handleError)
      );
  }


  changePassword(newCred: any): Observable<any> {

    const url = `${apiUrl4}/` +"updatePass";
    return this.client.post(url, newCred,{ headers})
      .pipe(map(res=>{return res}),
        catchError(this.handleError)
      );

  }

  updatedDemog(donateDetails: any) : Observable<any> {

    const url = `${apiUrl4}/` +"updateDemog";

    return this.client.post(url, donateDetails,{ headers})
      .pipe(map(res=>{return res}),
        catchError(this.handleError)
      );
  }

}
