import { Component, OnInit } from '@angular/core';
import { store } from '../models/store';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  constructor(private http: HttpService){}
  displayFirstButton: boolean = true;
  displayChooseAStore: boolean = false;
  allStores : store[] = [];
  ngOnInit(): void {
    this.http.getAllStores().subscribe((res: store[]) => {
      this.allStores = res;
    });
  }
}
