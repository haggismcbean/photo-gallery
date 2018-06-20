import {Component, ViewChild, ElementRef} from '@angular/core';
import {Image} from 'ui/image';
 
import * as ImageSource from 'image-source';
import * as FileSystem from 'file-system';
import * as camera from 'nativescript-camera';
 
@Component({
  selector: "pg-main",
  providers: [],
  templateUrl: "main/main.component.html"
})
export class AppComponent {
  @ViewChild('displayedPicture') displayedPictureRef: ElementRef;
 
  constructor(){
  }
  
  ngOnInit() {
  	this.loadFromFile();
  }

  picturePlaceholderPath = "/var/mobile/Containers/Data/Application/7BC42E59-1C73-4F2F-AF52-C1B1E30CD7C1/Documents/test.jpg";
 
  takePicture(): void {
    camera.takePicture({ 
      width: 400, height: 100, keepAspectRatio: true, saveToGallery: true
    })
    .then((picture) => {
      this.display(picture);
      this.saveToFile(picture);
    });
  }
 
  display(picture) {
    this.picturePlaceholderPath = picture;
  }

  saveToFile(picture) {
	ImageSource.fromAsset(picture)
		.then((img) => {
			const folderDest = FileSystem.knownFolders.documents();
			this.pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
			console.warn('PATH DEST: ', this.pathDest);
			const saved = img.saveToFile(this.pathDest, "jpg");
			if (saved) {
				console.info("Image saved successfully!");
			}
		});
  }

  loadFromFile() {
  	// const folderDest = FileSystem.knownFolders.documents();
	// this.pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
	// console.warn('path dest from loading: ', this.pathDest);
  	// const picture = ImageSource.fromFile(this.pathDest)
  	// console.warn(picture);
  		
	// if (picture) {
		// const displayedPictureView = <Image>this.displayedPictureRef.nativeElement;
    	// displayedPictureView.imageSource = picture;
		// this.picturePlaceholderPath = picture;
	// }
  }
}
