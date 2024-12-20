import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { Tinyurl } from '../Models/Interfaces/tinyurl';
import { TyniurlServiceService } from '../Services/tyniurl-service.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  standalone: false
})
export class MainMenuComponent implements OnInit {
  public TynyUrlForm!: UntypedFormGroup;
  public results$!: Observable<Tinyurl>;
  public shortenedUrl: string = '';
  public currentAlias: string = ''; 
  public originalUrl:string = '';
  
  constructor(private service: TyniurlServiceService) {
  }


  
  ngOnInit(): void {
    this.createUrlsForm();
    this.results$.subscribe(resp => console.log('aca emitio22',resp))
  }

  createUrlsForm() {
    this.TynyUrlForm =  new UntypedFormGroup({
        encode: new UntypedFormGroup({
            urlForEncode: new UntypedFormControl('')
        }) ,
        decode: new UntypedFormGroup({
            urlForDecode: new UntypedFormControl(''),
            alias: new UntypedFormControl('')
        })
    })
  }
  encode(){
    const urlControl = this.TynyUrlForm.get('encode.urlForEncode') as UntypedFormControl;
    const url = urlControl.value;
    
    console.log('Componente: iniciando encode');
    
    let request = {
      url: url,
      domain: "tiny.one"
    };
    
    this.service.createNewTinyUrl(request).subscribe({
      next: (response) => {
        console.log('Componente: respuesta exitosa', response);
        this.shortenedUrl = response.data.domain; 
        this.currentAlias = response.data.alias; 
      },
      error: (error) => console.error('Componente: error', error)
    });
  }
  decode(){
    const domain = this.TynyUrlForm.get('decode.urlForDecode')?.value;
    const alias = this.TynyUrlForm.get('decode.alias')?.value;
  
    if (domain && alias) {
      this.service.getDecodedUrl(domain, alias).subscribe({
        next: (response) => {
          console.log('URL decodificada:', response);
          this.originalUrl = response.data.url
        },
        error: (error) => console.error('Error al decodificar:', error)
      });
    } else {
      console.error('Se requieren tanto el dominio como el alias');
    }
  }
}
