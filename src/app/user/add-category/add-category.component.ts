import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  form:FormGroup;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      level1: new FormControl('',Validators.required),
      level2: new FormControl('',Validators.required),
      level3: new FormControl('',Validators.required),
      level4: new FormControl('',Validators.required),
    })
  }

  createSubCategory(){

  }
  deleteSubCategory(){
    
  }

  onSubmit(){
    
    const {level1,level2,level3,level4} = this.form.value;
    console.log(level1,level2,level3,level4);
    this.usersrv.createCategoriesToServer(level1,level2,level3,level4).subscribe(d=>{
      console.log('d',d);
    })
  }

}
