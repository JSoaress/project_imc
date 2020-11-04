import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  historics = []

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getHistorics().subscribe((result: any) => {  
      this.historics = result
    })
  }

  public calcularImc() {
    this.router.navigate(['/tab2'])
  }

}
