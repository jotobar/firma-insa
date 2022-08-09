// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  disableSelect = new FormControl(false);
  link = "https://www.analytics10.com/wp-content/uploads/2015/11/Andre%CC%81s-Urenda-Warren.jpg";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  /* To copy any Text nueva*/

  copyText() {
    console.log('Copiando tabla');
    let table: HTMLElement|null;

    const selBox = document.createElement('textarea');
    //
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    table = document.getElementById('tabla-firma');

    selBox.value = table!.outerHTML;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);
    table = document.getElementById('tabla-firma') as HTMLInputElement;
    const seleccion = document.createRange();
    seleccion.selectNodeContents(table);
    if (table!=null){
      window.getSelection()!.removeAllRanges();
      window.getSelection()!.addRange(seleccion);
      document.execCommand('copy');
      window.getSelection()!.removeRange(seleccion);
    }
  }


  constructor() { }

  ngOnInit() {
  }}

export class CardActionsExample {}
