import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchResponse, MetricsResponse, MovementRequest, MovementResponse } from './interface';

@Injectable({
  providedIn: 'root'
})
export class RpsService {


  private baseUrl: string = 'http://localhost:8080/rps/v1';

  private base64Access: string = '';

  //http://192.168.1.104:8080/rps/v1/match
  constructor(private http: HttpClient) { }

  setUserPass(user: string, pass: string){
    this.base64Access = btoa(`${user}:${pass}`);
  }

  getBasicOauth() : string{
    console.log(`Basic ${this.base64Access}`);
    return `Basic ${this.base64Access}`;
  }

  getCredentialHeaders(): HttpHeaders{
    return new HttpHeaders().append('Authorization',this.getBasicOauth());
  }

  startMatch(){
    return this.http.post<MatchResponse>(`${this.baseUrl}/match`,{}, {headers: this.getCredentialHeaders()})

  }

  sendMovement(movementRequest: MovementRequest){
    return this.http.post<MovementResponse>(`${this.baseUrl}/movement`,movementRequest,{headers: this.getCredentialHeaders()})
  }

  getMatch(id: number){
    return this.http.get<MatchResponse>(`${this.baseUrl}/match/${id}`,{headers: this.getCredentialHeaders()})
  }

  getMetrics(type: string){
    return this.http.get<MetricsResponse>(`${this.baseUrl}/match/metrics?type=${type}`,{headers: this.getCredentialHeaders()})
  }
}
