import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-view-persons',
  templateUrl: './view-persons.component.html',
  styleUrls: ['./view-persons.component.css']
})

export class ViewPersonsComponent implements OnInit, AfterViewInit {

  constructor(
    private personService: PersonService) { }

    title = "View";
    persons: Person[] = [];
    displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'occupation', 'actions'];
    dataSource = new MatTableDataSource<Person>(this.persons);
    @ViewChild(MatPaginator) paginator: MatPaginator;


    ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(
        persons =>
        this.persons = persons['person']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteRecord(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }

}
