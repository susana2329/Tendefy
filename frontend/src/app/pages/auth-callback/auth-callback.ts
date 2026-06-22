import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  template: ''
})
export class AuthCallback {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

 
ngOnInit() {
  const token =
    this.route.snapshot.queryParamMap.get('token');

  if (token && typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    this.router.navigate(['/app/home']);
  }
}
  }