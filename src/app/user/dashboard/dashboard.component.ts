import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // data = [[{title:'book'},{title:'pen'},{title:'paper'}],[{title:'abc'}],[{title:'123'},{title:'+-'},{title:'------'}]]
  
  ////testing
  spinnerValue = 1;
  initialData = [];
  leveldata = [];
  selectedId;

//////testing


  form:FormGroup;

  constructor(private usersrv:UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      category: new FormControl(),

    })
    this.usersrv.getCategoryFromServer().subscribe((d:{message:string,data:any[]})=>{


      //////
        console.log('data',d)
        this.initialData = d.data;
        this.leveldata = this.initialData;
      //////
    })
  }







  //////////////////test///////

  onClickCard(id){
    console.log(id);
    this.selectedId = id;
  }

  get addSpinnerValue(){
    return (this.spinnerValue / 4 ) * 100;
  }

  nextStep(){
    if(this.spinnerValue <= 4){
      if(this.selectedId){
        console.log('this.spinner->',this.spinnerValue,' this.selectedId->',this.selectedId);
        this.usersrv.getCategoryFromServer(this.selectedId).subscribe((d:{message:string,data:any[]})=>{
  
          this.leveldata = d.data;
          this.selectedId = null;
          if(this.spinnerValue<4){
            this.spinnerValue++;
          }
        })
      }
    }else{
      console.log('redirect');
      this.reset();
    }
  }
  reset(){
    this.leveldata = this.initialData;
    this.spinnerValue = 1;
    this.selectedId = null;
  }

  ///////////test//////////
}
