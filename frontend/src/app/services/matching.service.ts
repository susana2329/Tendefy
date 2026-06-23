import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  constructor(private http: HttpClient) {}
    
  
getProfiles() {
     const token = typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : null;

  return this.http.get(
    'http://localhost:3000/matching',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}


like(userId: string) {
  const token = localStorage.getItem('token');

  return this.http.post(
    'http://localhost:3000/like',
    {
      toUser: userId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
}