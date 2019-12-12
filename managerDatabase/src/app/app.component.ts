import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  SERVER_URL = "http://18.236.147.128:3000/getUsers";
  submitted = false;
  result: string;


constructor(private http: HttpClient) {};

  public data = [];

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  ngOnInit() {

    this.result="Users data table, press 'Get users' to get the data base",

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }


  onSubmit() {


      console.log("Pressed button")
      this.submitted = true;

      // get the data from the database and display values on success

      this.http.get<any>(this.SERVER_URL).subscribe(
          (res) => {
              this.result="These are the users availables"
              console.log(res);
              this.data=res;
          },
          (err) => console.log(err)

      );
    }


}
