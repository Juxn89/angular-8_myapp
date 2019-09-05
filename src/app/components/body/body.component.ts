import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar: boolean = true;
    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus' ];
    constructor(){
       
    }
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };
    fnMostrar() {
        this.mostrar = this.mostrar === true ? false : true;
    }
}
