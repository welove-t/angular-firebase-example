import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<firebase.User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
      this.afUser$.subscribe(user => console.log(user));
  }

  login() {
    this.afAuth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    ).then(() => {
      this.snackBar.open('ようこそGitPetへ！😆', null, {
        duration: 2000
      });
    });
  }
  logout(){
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました', null, {
        duration: 2000
      })
    })
    this.router.navigateByUrl('/welcom');
  }

}
