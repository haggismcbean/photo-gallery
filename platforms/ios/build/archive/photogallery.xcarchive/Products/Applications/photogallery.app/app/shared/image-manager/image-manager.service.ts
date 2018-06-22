import { Injectable } from "@angular/core";

import * as FileSystem from 'file-system';
import * as ImageSource from 'image-source';

import { ImageFile } from "./image-file.model";

@Injectable()
export class ImageManagerService {
	private imagesSubdirectory = "images";
	private folderDest = FileSystem.knownFolders.documents().getFolder(this.imagesSubdirectory);

	pictures: Array<Object> = [];

	getAllImages() {
		this.pictures = [];

		return this.folderDest.getEntities()
			.then((entities)=> {
				entities.forEach((entity, index) => {
					this.pictures.unshift(new ImageFile(String(index), entity.path));
				});

				return this.pictures;
			});
	}

	saveToFile(picture) {
		return ImageSource.fromAsset(picture)
			.then((img) => {
				const pathDest = FileSystem.path.join(this.folderDest.path, String(this.pictures.length) + ".png");
				const saved = img.saveToFile(pathDest, "png");
			});
	}
}