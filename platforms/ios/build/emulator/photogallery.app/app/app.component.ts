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

  picturePlaceholderPath = "~/images/placeholder-img.jpg";
  pathDest = "unknown";
 
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
			console.warn('PATH DEST: ', pathDest);
			const saved = img.saveToFile(pathDest, "jpg");
			if (saved) {
				console.info("Image saved successfully!");
			}
		});
  }

  loadFromFile() {
  	const folderDest = FileSystem.knownFolders.documents();
	this.pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
	console.warn('path dest from loading: ', pathDest);
  	const picture = ImageSource.fromFile(pathDest)
  	console.warn(picture);
  		
	if (picture) {
		const displayedPictureView = <Image>this.displayedPictureRef.nativeElement;
    	displayedPictureView.imageSource = picture;
		// this.picturePlaceholderPath = image;
	}
  }
}
