import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
//export class AuthGuard implements CanActivate {
export class AuthGuard {
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  /* ToDo onderstaande */
  //canActivate(): Observable<boolean> {
  // return this.accountService.currentUser$.pipe(
  //   map(user => {
  //     if (user) return true;
  //     this.toastr.error('You shall not pass!');
  //   })

  //   // map((user: any): true | undefined => {
  //   // map(user => {
  //   //   if (user) return true;
  //   //   this.toastr.error('You shall not pass!');
  //   // })
  // )
  //}
}
