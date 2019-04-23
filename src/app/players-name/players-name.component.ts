import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.css']
})
export class PlayersNameComponent implements OnInit {
  profileForm = new FormGroup({
    playerX: new FormControl('', Validators.required),
    playerO: new FormControl('', Validators.required)
  });
/*   profileForm = this.fb.group({
    playerX: [''],
    playerO: ['']
  }); */
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    console.log(this.profileForm.value);
  }
}
