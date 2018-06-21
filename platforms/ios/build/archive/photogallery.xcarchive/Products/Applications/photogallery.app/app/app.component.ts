import {Component} from '@angular/core';
 
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import * as ImageSource from 'image-source';
import * as FileSystem from 'file-system';
import * as camera from 'nativescript-camera';
 
@Component({
	selector: "pg-main",
	styleUrls: ["app.css"],
	templateUrl: "main/main.component.html"
})
export class AppComponent {
	groceryList = [];
	picturePlaceholderPath = "~/images/placeholder-img.jpg";

	ngOnInit() {
		this.loadFromFile();
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
		console.log('path: ', folderDest.path);
		folderDest.getEntities()
			.then((entities)=> {
				entities.forEach((entity) => {
					this.picturePlaceholderPath = entity.path;
				});
			});
	}
}
