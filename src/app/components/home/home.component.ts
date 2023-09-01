import { Component } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  operation : string =" ";
  result: string = " ";
  write(value: string){
    if(value === "C"){
      this.operation="";
      this.result="";
    }else if(value === "D"){
      this.operation = this.operation.slice(0,-1);
    }else if (value === "="){
      try {
        const resultado = math.evaluate(this.operation); // Resuelve la expresión
        this.result = resultado.toString(); // Muestra el resultado
      } catch (error) {
        this.result = "Syntax Error";
      }
    }
    else{
      this.operation += value;
    }

  }
  
}
