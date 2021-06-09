import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person.service';
import {Location } from '@angular/common';

	@Component({
		selector: 'app-capture-person',
		templateUrl: './capture-person.component.html',
		styleUrls: ['./capture-person.component.css']
	})

	export class CapturePersonComponent implements OnInit {
	title = 'capture';

	profileForm = this.fb.group({
		name: ['', Validators.required],
		surname: ['', Validators.required],
		age: ['', Validators.required],
		occupation: ['', Validators.required]
	});

	persons: Person[] = [];

	constructor(private fb: FormBuilder,
	private personService: PersonService,
  private location: Location) { }

  get f() { return this.profileForm.controls;}

  goBack(): void {
    this.location.back();
  }

	submitted = false;
	onSubmit() {
		this.submitted = true;
		this.personService.addPerson(this.profileForm.value)
    .subscribe(person => this.persons.push(person));
	}

	ngOnInit(): void {
	}

}
