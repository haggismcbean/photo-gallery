"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
// import { PhotoViewer } from "nativescript-photoviewer";
var image_manager_service_1 = require("./shared/image-manager/image-manager.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(imageManagerService) {
        this.imageManagerService = imageManagerService;
        this.pictures = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.populatePicturesArray();
    };
    AppComponent.prototype.takePicture = function () {
        var _this = this;
        camera.takePicture({
            width: 400, height: 100, keepAspectRatio: true, saveToGallery: true
        })
            .then(function (picture) {
            _this.saveToFile(picture);
        });
    };
    AppComponent.prototype.saveToFile = function (picture) {
        var _this = this;
        this.imageManagerService.saveToFile(picture)
            .then(function () {
            _this.populatePicturesArray();
        });
    };
    AppComponent.prototype.populatePicturesArray = function () {
        var _this = this;
        this.imageManagerService.getAllImages()
            .then(function (images) {
            _this.pictures = images;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "pg-main",
            styleUrls: ["app.css"],
            providers: [image_manager_service_1.ImageManagerService],
            templateUrl: "main/main.component.html"
        }),
        __metadata("design:paramtypes", [image_manager_service_1.ImageManagerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsNENBQThDO0FBQzlDLDBEQUEwRDtBQUUxRCxzRkFBbUY7QUFTbkY7SUFHQyxzQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFGNUQsYUFBUSxHQUFrQixFQUFFLENBQUM7SUFFa0MsQ0FBQztJQUVoRSwrQkFBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5BLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUk7U0FDbkUsQ0FBQzthQUNBLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDYixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxPQUFPO1FBQWxCLGlCQUtDO1FBSkEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDMUMsSUFBSSxDQUFDO1lBQ0wsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQXFCLEdBQXJCO1FBQUEsaUJBS0M7UUFKQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFO2FBQ3JDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QlcsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSwwQkFBMEI7U0FDdkMsQ0FBQzt5Q0FJd0MsMkNBQW1CO09BSGhELFlBQVksQ0ErQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuIFxuaW1wb3J0ICogYXMgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbi8vIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1waG90b3ZpZXdlclwiO1xuXG5pbXBvcnQgeyBJbWFnZU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2ltYWdlLW1hbmFnZXIvaW1hZ2UtbWFuYWdlci5zZXJ2aWNlXCI7XG5cbiBcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJwZy1tYWluXCIsXG5cdHN0eWxlVXJsczogW1wiYXBwLmNzc1wiXSxcblx0cHJvdmlkZXJzOiBbSW1hZ2VNYW5hZ2VyU2VydmljZV0sXG5cdHRlbXBsYXRlVXJsOiBcIm1haW4vbWFpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBpY3R1cmVzOiBBcnJheTxPYmplY3Q+ID0gW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZU1hbmFnZXJTZXJ2aWNlOiBJbWFnZU1hbmFnZXJTZXJ2aWNlKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucG9wdWxhdGVQaWN0dXJlc0FycmF5KCk7XG5cdH1cblxuXHR0YWtlUGljdHVyZSgpOiB2b2lkIHtcblx0XHRjYW1lcmEudGFrZVBpY3R1cmUoeyBcblx0XHRcdHdpZHRoOiA0MDAsIGhlaWdodDogMTAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWVcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHBpY3R1cmUpID0+IHtcblx0XHRcdFx0dGhpcy5zYXZlVG9GaWxlKHBpY3R1cmUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzYXZlVG9GaWxlKHBpY3R1cmUpIHtcblx0XHR0aGlzLmltYWdlTWFuYWdlclNlcnZpY2Uuc2F2ZVRvRmlsZShwaWN0dXJlKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBvcHVsYXRlUGljdHVyZXNBcnJheSgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwb3B1bGF0ZVBpY3R1cmVzQXJyYXkoKSB7XG5cdFx0dGhpcy5pbWFnZU1hbmFnZXJTZXJ2aWNlLmdldEFsbEltYWdlcygpXG5cdFx0XHQudGhlbigoaW1hZ2VzKSA9PiB7XG5cdFx0XHRcdHRoaXMucGljdHVyZXMgPSBpbWFnZXM7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19