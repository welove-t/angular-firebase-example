import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login() {
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider();
    );
  logout(){

  }
}
