export interface Boardgame {
    id : number; 
    name: string;
}

export interface User {
    id: number; 
	username: string; 
	password : string; 
	boardgame : number[]; 
	city : number; 
	role : string; 
	friend : number[]; 
	reservation : number[]; 
}

export interface City {
    id : number; 
    name: string;
}

