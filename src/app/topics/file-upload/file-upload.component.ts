 
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  uploadedFileNames: string [] = [];
  fileUrl: string = 'http://storeapi.gerasim.in/customer/';
  constructor(private http: HttpClient){}

  uploadImage(event: any) {
    debugger;
    const file = event.currentTarget.files;
    if (file.type == 'image/png' && file.size < 900000) {
      const formObj = new FormData();
      formObj.append('file', file);
      this.http.post("https://storeapi.gerasim.in/api/Customer/Upload", formObj).subscribe((res: any) => {
        debugger;
        this.uploadedFileNames.push(res);
      })
    } else {
      if(file.size > 600000) {
        alert('file size shoube be less tha 600 kb')
      } else {
        alert("Only png Files are allowed");
      }
     
    }
    
  }
 
}
