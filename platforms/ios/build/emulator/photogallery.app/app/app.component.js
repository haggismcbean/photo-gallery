"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageSource = require("image-source");
var FileSystem = require("file-system");
var camera = require("nativescript-camera");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.picturePlaceholderPath = "~/images/placeholder-img.jpg";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadFromFile();
    };
    AppComponent.prototype.takePicture = function () {
        var _this = this;
        camera.takePicture({
            width: 400, height: 100, keepAspectRatio: true, saveToGallery: true
        })
            .then(function (picture) {
            _this.display(picture);
            _this.saveToFile(picture);
        });
    };
    AppComponent.prototype.display = function (picture) {
        this.picturePlaceholderPath = picture;
    };
    AppComponent.prototype.saveToFile = function (picture) {
        ImageSource.fromAsset(picture)
            .then(function (img) {
            var folderDest = FileSystem.knownFolders.documents();
            var pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
            console.warn('PATH DEST: ', pathDest);
            var saved = img.saveToFile(pathDest, "jpg");
            if (saved) {
                console.info("Image saved successfully!");
            }
        });
    };
    AppComponent.prototype.loadFromFile = function () {
        var folderDest = FileSystem.knownFolders.documents();
        var pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
        console.warn('path dest from loading: ', pathDest);
        var picture = ImageSource.fromFile(pathDest);
        console.warn(picture);
        if (picture) {
            var displayedPictureView = this.displayedPictureRef.nativeElement;
            displayedPictureView.imageSource = picture;
            // this.picturePlaceholderPath = image;
        }
    };
    __decorate([
        core_1.ViewChild('displayedPicture'),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "displayedPictureRef", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "pg-main",
            providers: [],
            templateUrl: "main/main.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFHL0QsMENBQTRDO0FBQzVDLHdDQUEwQztBQUMxQyw0Q0FBOEM7QUFPOUM7SUFHRTtRQU9BLDJCQUFzQixHQUFHLDhCQUE4QixDQUFDO0lBTnhELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFJRCxrQ0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFQQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJO1NBQ3BFLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE9BQU8sQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLE9BQU87UUFDbkIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDNUIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNULElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdkQsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNDLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekQsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBTSxvQkFBb0IsR0FBVSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDO1lBQ3hFLG9CQUFvQixDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDOUMsdUNBQXVDO1FBQ3hDLENBQUM7SUFDQSxDQUFDO0lBbEQ4QjtRQUE5QixnQkFBUyxDQUFDLGtCQUFrQixDQUFDO2tDQUFzQixpQkFBVTs2REFBQztJQURwRCxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzs7T0FDVyxZQUFZLENBb0R4QjtJQUFELG1CQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJ3VpL2ltYWdlJztcbiBcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gJ2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gJ2ZpbGUtc3lzdGVtJztcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbiBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwZy1tYWluXCIsXG4gIHByb3ZpZGVyczogW10sXG4gIHRlbXBsYXRlVXJsOiBcIm1haW4vbWFpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2Rpc3BsYXllZFBpY3R1cmUnKSBkaXNwbGF5ZWRQaWN0dXJlUmVmOiBFbGVtZW50UmVmO1xuIFxuICBjb25zdHJ1Y3Rvcigpe1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgXHR0aGlzLmxvYWRGcm9tRmlsZSgpO1xuICB9XG5cbiAgcGljdHVyZVBsYWNlaG9sZGVyUGF0aCA9IFwifi9pbWFnZXMvcGxhY2Vob2xkZXItaW1nLmpwZ1wiO1xuIFxuICB0YWtlUGljdHVyZSgpOiB2b2lkIHtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoeyBcbiAgICAgIHdpZHRoOiA0MDAsIGhlaWdodDogMTAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWVcbiAgICB9KVxuICAgIC50aGVuKChwaWN0dXJlKSA9PiB7XG4gICAgICB0aGlzLmRpc3BsYXkocGljdHVyZSk7XG4gICAgICB0aGlzLnNhdmVUb0ZpbGUocGljdHVyZSk7XG4gICAgfSk7XG4gIH1cbiBcbiAgZGlzcGxheShwaWN0dXJlKSB7XG4gICAgdGhpcy5waWN0dXJlUGxhY2Vob2xkZXJQYXRoID0gcGljdHVyZTtcbiAgfVxuXG4gIHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRJbWFnZVNvdXJjZS5mcm9tQXNzZXQocGljdHVyZSlcblx0XHQudGhlbigoaW1nKSA9PiB7XG5cdFx0XHRjb25zdCBmb2xkZXJEZXN0ID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cdFx0XHRjb25zdCBwYXRoRGVzdCA9IEZpbGVTeXN0ZW0ucGF0aC5qb2luKGZvbGRlckRlc3QucGF0aCwgXCJ0ZXN0LmpwZ1wiKTtcblx0XHRcdGNvbnNvbGUud2FybignUEFUSCBERVNUOiAnLCBwYXRoRGVzdCk7XG5cdFx0XHRjb25zdCBzYXZlZCA9IGltZy5zYXZlVG9GaWxlKHBhdGhEZXN0LCBcImpwZ1wiKTtcblx0XHRcdGlmIChzYXZlZCkge1xuXHRcdFx0XHRjb25zb2xlLmluZm8oXCJJbWFnZSBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cbiAgbG9hZEZyb21GaWxlKCkge1xuICBcdGNvbnN0IGZvbGRlckRlc3QgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0Y29uc3QgcGF0aERlc3QgPSBGaWxlU3lzdGVtLnBhdGguam9pbihmb2xkZXJEZXN0LnBhdGgsIFwidGVzdC5qcGdcIik7XG5cdGNvbnNvbGUud2FybigncGF0aCBkZXN0IGZyb20gbG9hZGluZzogJywgcGF0aERlc3QpO1xuICBcdGNvbnN0IHBpY3R1cmUgPSBJbWFnZVNvdXJjZS5mcm9tRmlsZShwYXRoRGVzdClcbiAgXHRjb25zb2xlLndhcm4ocGljdHVyZSk7XG4gIFx0XHRcblx0aWYgKHBpY3R1cmUpIHtcblx0XHRjb25zdCBkaXNwbGF5ZWRQaWN0dXJlVmlldyA9IDxJbWFnZT50aGlzLmRpc3BsYXllZFBpY3R1cmVSZWYubmF0aXZlRWxlbWVudDtcbiAgICBcdGRpc3BsYXllZFBpY3R1cmVWaWV3LmltYWdlU291cmNlID0gcGljdHVyZTtcblx0XHQvLyB0aGlzLnBpY3R1cmVQbGFjZWhvbGRlclBhdGggPSBpbWFnZTtcblx0fVxuICB9XG59XG4iXX0=