"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageSource = require("image-source");
var FileSystem = require("file-system");
var camera = require("nativescript-camera");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.picturePlaceholderPath = "~/Documents/test.jpg";
        this.pathDest = "unknown";
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
        var _this = this;
        ImageSource.fromAsset(picture)
            .then(function (img) {
            var folderDest = FileSystem.knownFolders.documents();
            _this.pathDest = FileSystem.path.join(folderDest.path, "test.jpg");
            console.warn('PATH DEST: ', _this.pathDest);
            var saved = img.saveToFile(_this.pathDest, "jpg");
            if (saved) {
                console.info("Image saved successfully!");
            }
        });
    };
    AppComponent.prototype.loadFromFile = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFHL0QsMENBQTRDO0FBQzVDLHdDQUEwQztBQUMxQyw0Q0FBOEM7QUFPOUM7SUFHRTtRQU9BLDJCQUFzQixHQUFHLHNCQUFzQixDQUFDO1FBQ2hELGFBQVEsR0FBRyxTQUFTLENBQUM7SUFQckIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUtELGtDQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDakIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUk7U0FDcEUsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE9BQU87WUFDWixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUFsQixpQkFXQztRQVZGLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO2FBQzVCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDVCxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0MsMERBQTBEO1FBQzVELHFFQUFxRTtRQUNyRSwyREFBMkQ7UUFDekQsc0RBQXNEO1FBQ3RELHlCQUF5QjtRQUUzQixpQkFBaUI7UUFDaEIsOEVBQThFO1FBQzNFLDhDQUE4QztRQUNqRCx5Q0FBeUM7UUFDMUMsSUFBSTtJQUNILENBQUM7SUFuRDhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQXNCLGlCQUFVOzZEQUFDO0lBRHBELFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDOztPQUNXLFlBQVksQ0FxRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSAndWkvaW1hZ2UnO1xuIFxuaW1wb3J0ICogYXMgSW1hZ2VTb3VyY2UgZnJvbSAnaW1hZ2Utc291cmNlJztcbmltcG9ydCAqIGFzIEZpbGVTeXN0ZW0gZnJvbSAnZmlsZS1zeXN0ZW0nO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBnLW1haW5cIixcbiAgcHJvdmlkZXJzOiBbXSxcbiAgdGVtcGxhdGVVcmw6IFwibWFpbi9tYWluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnZGlzcGxheWVkUGljdHVyZScpIGRpc3BsYXllZFBpY3R1cmVSZWY6IEVsZW1lbnRSZWY7XG4gXG4gIGNvbnN0cnVjdG9yKCl7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICBcdHRoaXMubG9hZEZyb21GaWxlKCk7XG4gIH1cblxuICBwaWN0dXJlUGxhY2Vob2xkZXJQYXRoID0gXCJ+L0RvY3VtZW50cy90ZXN0LmpwZ1wiO1xuICBwYXRoRGVzdCA9IFwidW5rbm93blwiO1xuIFxuICB0YWtlUGljdHVyZSgpOiB2b2lkIHtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoeyBcbiAgICAgIHdpZHRoOiA0MDAsIGhlaWdodDogMTAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWVcbiAgICB9KVxuICAgIC50aGVuKChwaWN0dXJlKSA9PiB7XG4gICAgICB0aGlzLmRpc3BsYXkocGljdHVyZSk7XG4gICAgICB0aGlzLnNhdmVUb0ZpbGUocGljdHVyZSk7XG4gICAgfSk7XG4gIH1cbiBcbiAgZGlzcGxheShwaWN0dXJlKSB7XG4gICAgdGhpcy5waWN0dXJlUGxhY2Vob2xkZXJQYXRoID0gcGljdHVyZTtcbiAgfVxuXG4gIHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRJbWFnZVNvdXJjZS5mcm9tQXNzZXQocGljdHVyZSlcblx0XHQudGhlbigoaW1nKSA9PiB7XG5cdFx0XHRjb25zdCBmb2xkZXJEZXN0ID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cdFx0XHR0aGlzLnBhdGhEZXN0ID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyRGVzdC5wYXRoLCBcInRlc3QuanBnXCIpO1xuXHRcdFx0Y29uc29sZS53YXJuKCdQQVRIIERFU1Q6ICcsIHRoaXMucGF0aERlc3QpO1xuXHRcdFx0Y29uc3Qgc2F2ZWQgPSBpbWcuc2F2ZVRvRmlsZSh0aGlzLnBhdGhEZXN0LCBcImpwZ1wiKTtcblx0XHRcdGlmIChzYXZlZCkge1xuXHRcdFx0XHRjb25zb2xlLmluZm8oXCJJbWFnZSBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuICB9XG5cbiAgbG9hZEZyb21GaWxlKCkge1xuICBcdC8vIGNvbnN0IGZvbGRlckRlc3QgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0Ly8gdGhpcy5wYXRoRGVzdCA9IEZpbGVTeXN0ZW0ucGF0aC5qb2luKGZvbGRlckRlc3QucGF0aCwgXCJ0ZXN0LmpwZ1wiKTtcblx0Ly8gY29uc29sZS53YXJuKCdwYXRoIGRlc3QgZnJvbSBsb2FkaW5nOiAnLCB0aGlzLnBhdGhEZXN0KTtcbiAgXHQvLyBjb25zdCBwaWN0dXJlID0gSW1hZ2VTb3VyY2UuZnJvbUZpbGUodGhpcy5wYXRoRGVzdClcbiAgXHQvLyBjb25zb2xlLndhcm4ocGljdHVyZSk7XG4gIFx0XHRcblx0Ly8gaWYgKHBpY3R1cmUpIHtcblx0XHQvLyBjb25zdCBkaXNwbGF5ZWRQaWN0dXJlVmlldyA9IDxJbWFnZT50aGlzLmRpc3BsYXllZFBpY3R1cmVSZWYubmF0aXZlRWxlbWVudDtcbiAgICBcdC8vIGRpc3BsYXllZFBpY3R1cmVWaWV3LmltYWdlU291cmNlID0gcGljdHVyZTtcblx0XHQvLyB0aGlzLnBpY3R1cmVQbGFjZWhvbGRlclBhdGggPSBwaWN0dXJlO1xuXHQvLyB9XG4gIH1cbn1cbiJdfQ==