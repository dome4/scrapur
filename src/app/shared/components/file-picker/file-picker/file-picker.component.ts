import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {

  @Output() file = new EventEmitter<any>();
  public fileName: string = '';

  constructor() { }

  ngOnInit(): void {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
  }

  public async onFilesChanged(files: FileList): Promise<void> {
    try {
      if (!files || !files[0] || !files[0].name) {
        throw new Error('file not found');
      }
      const file: File = files[0];
      const fileContent: string = await this.readFileAsync(file);
      const res = JSON.parse(fileContent);
      this.file.emit(res);
      this.fileName = file.name;
    } catch (err) {
      console.log('error: ', err);
    }
  }

  private readFileAsync(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsText(file, 'UTF-8');
    });
  }

}
