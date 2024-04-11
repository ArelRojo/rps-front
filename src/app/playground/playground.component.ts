import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RpsService } from '../rps.service';
import { MatchResponse, MovementRequest, MovementResponse } from '../interface';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {

  match: MatchResponse =
    {
      movements: 0,
      winner: ''

    };


  humanOption: string = '';

  winner: string= '';

  movementResponse?: MovementResponse;

  constructor(private rpsService: RpsService) {

  }


  startMatch(): void {
    this.rpsService.startMatch().subscribe(resp => this.match = resp);
    this.winner = '';
    this.movementResponse = undefined;
    this.humanOption = ''
  }

  sendMovement(): void {
    var movement: MovementRequest = {
      humanType: this.humanOption,
      idMatch: this.match.id,

    }
    this.rpsService.sendMovement(movement).subscribe(resp => {

      this.movementResponse=resp
      if(this.movementResponse.isFinal){
        this.rpsService.getMatch(this.movementResponse.idMatch).subscribe(resp => this.winner = resp.winner)
      }
    });
  }

  catchHumanOption(value: string) {
    this.humanOption = value;
    console.log("CATCH -> " + this.humanOption)
  }



}
