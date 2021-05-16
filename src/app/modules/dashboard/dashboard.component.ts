import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

export interface Person {
  id: number;
  name: string;
  age: number;
  state: string;
}

const PERSON_DATA: Person[] = [
  {id: 1, name: 'Rachelle Kyle', age: 32, state: 'AL'},
  {id: 2, name: 'Libby Staci', age: 42, state: 'MG'},
  {id: 3, name: 'Pierce Jett', age: 19, state: 'SP'},
  {id: 4, name: 'Eric Alexis', age: 32, state: 'AM'},
  {id: 5, name: 'Wilson Midge', age: 22, state: 'SC'},
  {id: 6, name: 'Tex Rebecca', age: 31, state: 'PR'},
  {id: 7, name: 'Silas Thurstan', age: 24, state: 'SP'},
  {id: 8, name: 'Avah Mayson', age: 23, state: 'MG'},
  {id: 9, name: 'Colby Kellen', age: 26, state: 'AL'},
  {id: 10, name: 'Braelynn Fenton', age: 52, state: 'AL'},
  {id: 11, name: 'Rosannah Blessing', age: 42, state: 'AL'},
  {id: 12, name: 'Cate Tyron', age: 43, state: 'AL'},
  {id: 13, name: 'Israel Marleen', age: 51, state: 'AL'},
  {id: 14, name: 'Dwight Mayson', age: 42, state: 'SP'},
  {id: 15, name: 'Mahalia Beulah', age: 42, state: 'SP'},
  {id: 16, name: 'Queen Baylee', age: 46, state: 'SP'},
  {id: 17, name: 'Philis Jules', age: 47, state: 'SP'},
  {id: 18, name: 'Brion Nichola', age: 32, state: 'SP'},
  {id: 19, name: 'Lucy Montgomery', age: 42, state: 'SP'},
  {id: 20, name: 'Jayne Maisy', age: 52, state: 'SP'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['id', 'name', 'age', 'state'];
  dataSource = new MatTableDataSource<Person>(PERSON_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
}
