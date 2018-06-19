import { Component } from "@angular/core";
import { PhotoService } from "./shared/photo/photo.service";
import { FileManagerService } from "./shared/file-manager/file-manager.service";

@Component({
  selector: "pg-main",
  providers: [PhotoService, FileManagerService],
  templateUrl: "main/main.component.html"
})
export class AppComponent {
	constructor(private photoService: PhotoService, private fileManagerService: FileManagerService) {
		// this.photo = new Photo();
		// this.file = new File();
	}

	takePhoto() {
		console.info("takePhoto");
	}

	upload() {
		console.info("upload");
	}
}
