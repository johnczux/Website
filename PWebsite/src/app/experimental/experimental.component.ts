import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.scss']
})
export class ExperimentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

draw(event :MouseEvent)
{
   var x  = event.clientX;
   var y = event.clientY;
  
   var box = document.getElementById("myCanvas");
   var rect = box.getBoundingClientRect();

   if( (x > rect.left && x < rect.right) && ( y < rect.bottom && y > rect.top ) )
   {

    var relativeX = x - rect.left;
    var relativeY = y - rect.top;
    const canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(relativeX,relativeY,4,0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
   }

}

}
