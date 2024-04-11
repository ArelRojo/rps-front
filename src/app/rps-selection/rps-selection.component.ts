import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { MovementResponse } from '../interface';

@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrl: './rps-selection.component.css'
})
export class RpsSelectionComponent implements OnChanges {

  @Input()
  type: string = ''

  @Input()
  movementResponse?: MovementResponse

  @Output()
  humanChoise = new EventEmitter<string>();

  option: string = '';

  options: string[] = [];

  optionsRadio: any[] = [];


  constructor() {
    this.options = ['PAPER', 'ROCK', 'SCISSOR'];


  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movementResponse'] && this.type==='Robot') {
      console.log("Recived movementResponse in " + this.type);
      if (this.movementResponse?.robotType) {
        this.option = this.movementResponse?.robotType
        console.log("ROBOT select "+this.option)
      }else{
        this.option= ''
      }
    }
    if (changes['movementResponse'] && this.type==='Human') {
      if(!changes['movementResponse'].currentValue)
      this.option = '';
    }
  }

  ngOnInit(): void {
    this.optionsRadio = this.options.map(op => {
      return {
        id: this.type + op,
        name: op
      }
    })
  }


  optionSelected(): void {
    this.humanChoise.emit(this.option);
    console.log("Has pulsado " + this.option);


  }

}
