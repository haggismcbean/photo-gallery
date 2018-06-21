import {Component, OnInit} from '@angular/core';
 
import * as NativeScriptUIListViewModule from "nativescript-ui-listview/angular";

import * as ImageSource from 'image-source';
import * as FileSystem from 'file-system';
import * as camera from 'nativescript-camera';

import { ImageManagerService } from "./shared/image-manager/image-manager.service";

 
@Component({
	selector: "pg-main",
	styleUrls: ["app.css"],
	providers: [ImageManagerService],
	templateUrl: "main/main.component.html"
})
export class AppComponent implements OnInit {
	pictures: Array<Object> = [];

	constructor(private imageManagerService: ImageManagerService) {

	}

	ngOnInit() {
		this.populatePicturesArray();
	}

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
		this.pictures.push({
			path: picture
		});
	}

	saveToFile(picture) {
		this.imageManagerService.saveToFile(picture)
			.then(() => {
				this.populatePicturesArray();
			});
	}

	populatePicturesArray() {
		this.imageManagerService.getAllImages()
			.then((images) => {
				this.pictures = images;
			});
	}
}
