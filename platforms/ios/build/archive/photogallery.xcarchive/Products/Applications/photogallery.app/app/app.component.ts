import { Component, ViewChild, ElementRef } from "@angular/core";
import { Image } from "ui/image";
import * as camera from "nativescript-camera";


import { PhotoService } from "./shared/photo/photo.service";
import { FileManagerService } from "./shared/file-manager/file-manager.service";


@Component({
  selector: "pg-main",
  providers: [PhotoService, FileManagerService],
  templateUrl: "main/main.component.html"
})
export class AppComponent {
	@ViewChild("displayedPicture") displayedPictureRef: ElementRef;
	constructor(private photoService: PhotoService, private fileManagerService: FileManagerService) {
		// this.photo = new Photo();
		// this.file = new File();
	}

	get picturePlaceholderPath(): string{
		return "~/images/placeholder-img.jpg";
	}

	takePhoto(): void {
		camera.requestPermissions()
			.then(() => {
				console.info("is available: ", camera.isAvailable());
				
				camera.takePicture({ 
			    	width: 400, height: 400, keepAspectRatio: true
			    })
			    .then((picture) => {
			    	console.info(picture);
			    	console.info("displayed tha picture");
			    	this.display(picture);
			    })
			    .catch((error) => {
			    	console.error("Camera error! ", error);
			    });
			})
			.catch((error) => {
				console.log("Permissions error!", error)
			})
	}

	display(picture) {
		const displayedPictureView = <Image>this.displayedPictureRef.nativeElement;
    	displayedPictureView.imageSource = picture;
    	console.info("displayed");
	}

	upload() {
		alert("upload");
	}
}
