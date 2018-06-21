import { Injectable } from "@angular/core";

import * as FileSystem from 'file-system';
import * as ImageSource from 'image-source';

import { ImageFile } from "./image-file.model";

@Injectable()
export class ImageManagerService {
	pictures: Array<Object> = [];

	getAllImages() {
		this.pictures = [];

		const folderDest = FileSystem.knownFolders.documents();

		return folderDest.getEntities()
			.then((entities)=> {
				entities.forEach((entity, index) => {
					this.pictures.push(new ImageFile(String(index), entity.path));
				});

				return this.pictures;
			});
	}

	saveToFile(picture) {
		return ImageSource.fromAsset(picture)
			.then((img) => {
				const folderDest = FileSystem.knownFolders.documents();
				const pathDest = FileSystem.path.join(folderDest.path, String(this.pictures.length) + ".png");
				const saved = img.saveToFile(pathDest, "png");
			});
	}
}