import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {map, startWith} from 'rxjs/operators';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  gamers:any = ['ABC'];
  myControl = new FormControl('');
  filteredOptions: any = [];
  searchFilterChip = [
    {name: 'Players', color: 'accent', isSelected:true, icon:'fa fa-chess-king'},
    {name: 'Organization', color: 'accent', isSelected:false, icon:'fa fa-building'},
    {name: 'Game', color: 'accent', isSelected:false, icon:'fa fa-dice-d20'}
  ];
  selection:boolean = false;
  segment = 'Players'
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.gamers.filter((option:any) => option.toLowerCase().includes(filterValue));
  }

  showDetails(){
    this.router.navigateByUrl('/gamers-details')
  }

  chipValue(data:any){
    this.searchFilterChip.forEach(element => {
      if(element.name === data.name){
        element.isSelected = true;
        this.segment = element.name;
      }else{
        element.isSelected = false;
      }
    });
  }
}
