import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public historic = {
    'altura': 0,
    'peso': 0
  }

  constructor(private apiService: ApiService, public alertController: AlertController) { }

  ngOnInit() {

  }

  async submitForm(){    
    if(this.historic.altura === 0 && this.historic.peso === 0){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha altura e peso!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postHistoric(this.historic).subscribe()
    }
  }

}
