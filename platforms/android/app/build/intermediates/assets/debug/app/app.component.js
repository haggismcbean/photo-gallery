"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
var photo_service_1 = require("./shared/photo/photo.service");
var file_manager_service_1 = require("./shared/file-manager/file-manager.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(photoService, fileManagerService) {
        this.photoService = photoService;
        this.fileManagerService = fileManagerService;
        // this.photo = new Photo();
        // this.file = new File();
    }
    Object.defineProperty(AppComponent.prototype, "picturePlaceholderPath", {
        get: function () {
            return "~/images/placeholder-img.jpg";
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.takePhoto = function () {
        var _this = this;
        camera.requestPermissions()
            .then(function () {
            console.info("is available: ", camera.isAvailable());
            camera.takePicture({
                width: 400, height: 400, keepAspectRatio: true
            })
                .then(function (picture) {
                console.info(picture);
                console.info("displayed tha picture");
                _this.display(picture);
            })
                .catch(function (error) {
                console.error("Camera error! ", error);
            });
        })
            .catch(function (error) {
            console.log("Permissions error!", error);
        });
    };
    AppComponent.prototype.display = function (picture) {
        var displayedPictureView = this.displayedPictureRef.nativeElement;
        displayedPictureView.imageSource = picture;
        console.info("displayed");
    };
    AppComponent.prototype.upload = function () {
        alert("upload");
    };
    __decorate([
        core_1.ViewChild("displayedPicture"),
        __metadata("design:type", core_1.ElementRef)
    ], AppComponent.prototype, "displayedPictureRef", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "pg-main",
            providers: [photo_service_1.PhotoService, file_manager_service_1.FileManagerService],
            templateUrl: "main/main.component.html"
        }),
        __metadata("design:paramtypes", [photo_service_1.PhotoService, file_manager_service_1.FileManagerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFFakUsNENBQThDO0FBRzlDLDhEQUE0RDtBQUM1RCxtRkFBZ0Y7QUFRaEY7SUFFQyxzQkFBb0IsWUFBMEIsRUFBVSxrQkFBc0M7UUFBMUUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQzdGLDRCQUE0QjtRQUM1QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVELHNCQUFJLGdEQUFzQjthQUExQjtZQUNDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELGdDQUFTLEdBQVQ7UUFBQSxpQkFvQkM7UUFuQkEsTUFBTSxDQUFDLGtCQUFrQixFQUFFO2FBQ3pCLElBQUksQ0FBQztZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFFckQsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDZixLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUk7YUFDOUMsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLE9BQU87UUFDZCxJQUFNLG9CQUFvQixHQUFVLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7UUFDeEUsb0JBQW9CLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUF4QzhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQXNCLGlCQUFVOzZEQUFDO0lBRG5ELFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUseUNBQWtCLENBQUM7WUFDN0MsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUdpQyw0QkFBWSxFQUE4Qix5Q0FBa0I7T0FGbEYsWUFBWSxDQTBDeEI7SUFBRCxtQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuXG5cbmltcG9ydCB7IFBob3RvU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9waG90by9waG90by5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWxlTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvZmlsZS1tYW5hZ2VyL2ZpbGUtbWFuYWdlci5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInBnLW1haW5cIixcbiAgcHJvdmlkZXJzOiBbUGhvdG9TZXJ2aWNlLCBGaWxlTWFuYWdlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJtYWluL21haW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKFwiZGlzcGxheWVkUGljdHVyZVwiKSBkaXNwbGF5ZWRQaWN0dXJlUmVmOiBFbGVtZW50UmVmO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvU2VydmljZTogUGhvdG9TZXJ2aWNlLCBwcml2YXRlIGZpbGVNYW5hZ2VyU2VydmljZTogRmlsZU1hbmFnZXJTZXJ2aWNlKSB7XG5cdFx0Ly8gdGhpcy5waG90byA9IG5ldyBQaG90bygpO1xuXHRcdC8vIHRoaXMuZmlsZSA9IG5ldyBGaWxlKCk7XG5cdH1cblxuXHRnZXQgcGljdHVyZVBsYWNlaG9sZGVyUGF0aCgpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIFwifi9pbWFnZXMvcGxhY2Vob2xkZXItaW1nLmpwZ1wiO1xuXHR9XG5cblx0dGFrZVBob3RvKCk6IHZvaWQge1xuXHRcdGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmluZm8oXCJpcyBhdmFpbGFibGU6IFwiLCBjYW1lcmEuaXNBdmFpbGFibGUoKSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjYW1lcmEudGFrZVBpY3R1cmUoeyBcblx0XHRcdCAgICBcdHdpZHRoOiA0MDAsIGhlaWdodDogNDAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWVcblx0XHRcdCAgICB9KVxuXHRcdFx0ICAgIC50aGVuKChwaWN0dXJlKSA9PiB7XG5cdFx0XHQgICAgXHRjb25zb2xlLmluZm8ocGljdHVyZSk7XG5cdFx0XHQgICAgXHRjb25zb2xlLmluZm8oXCJkaXNwbGF5ZWQgdGhhIHBpY3R1cmVcIik7XG5cdFx0XHQgICAgXHR0aGlzLmRpc3BsYXkocGljdHVyZSk7XG5cdFx0XHQgICAgfSlcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHQgICAgXHRjb25zb2xlLmVycm9yKFwiQ2FtZXJhIGVycm9yISBcIiwgZXJyb3IpO1xuXHRcdFx0ICAgIH0pO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQZXJtaXNzaW9ucyBlcnJvciFcIiwgZXJyb3IpXG5cdFx0XHR9KVxuXHR9XG5cblx0ZGlzcGxheShwaWN0dXJlKSB7XG5cdFx0Y29uc3QgZGlzcGxheWVkUGljdHVyZVZpZXcgPSA8SW1hZ2U+dGhpcy5kaXNwbGF5ZWRQaWN0dXJlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgXHRkaXNwbGF5ZWRQaWN0dXJlVmlldy5pbWFnZVNvdXJjZSA9IHBpY3R1cmU7XG4gICAgXHRjb25zb2xlLmluZm8oXCJkaXNwbGF5ZWRcIik7XG5cdH1cblxuXHR1cGxvYWQoKSB7XG5cdFx0YWxlcnQoXCJ1cGxvYWRcIik7XG5cdH1cbn1cbiJdfQ==