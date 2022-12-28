import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

interface AuthResponseData{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expireIn: string,
  localId: string
}




@Injectable({
  providedIn:'root'
})
export class AuthService{
  constructor(private http: HttpClient){

  }
  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvu_dnGmnApamaSpW3Cb-BINjFhwtzHCI',
    {
      email: email,
      password: password,
      returnSecureToken: true
    } );
  }
  logIn(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvu_dnGmnApamaSpW3Cb-BINjFhwtzHCI',
    {
      email: email,
      password: password,
      returnSecureToken: true
    } );
  }
}
