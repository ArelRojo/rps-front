export interface MatchResponse {
  id?:        number;
  winner:    string;
  movements: number;
}

export interface MovementRequest{

  idMatch?: number;
  humanType: string;
}

export interface MovementResponse{
  id?: number;
  idMatch: number;
  num?: number;
  humanType: string;
  robotType?: string;
  isFinal?: boolean
}

export interface MetricsResponse {
  wins:    number;
  rock:    number;
  paper:   number;
  scissor: number;
}
