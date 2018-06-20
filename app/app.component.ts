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

  picturePlaceholderPath = "~/images/placeholder-img.png";
 
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
			const pathDest = FileSystem.path.join(folderDest.path, "test.png");
			const saved = img.saveToFile(pathDest, "png");
			if (saved) {
				console.info("Image saved successfully!");
			}
		});
  }

  loadFromFile() {
  	const folderDest = FileSystem.knownFolders.documents();
	const pathDest = FileSystem.path.join(folderDest.path, "test.png");
  	const picture = ImageSource.fromFile(pathDest)
  		
	if (picture) {
		// console.warn(this.displayedPictureRef);
		// const displayedPictureView = <Image>this.displayedPictureRef.nativeElement;
    	// displayedPictureView.imageSource = picture;
		this.picturePlaceholderPath = image;
	}
  }
}
