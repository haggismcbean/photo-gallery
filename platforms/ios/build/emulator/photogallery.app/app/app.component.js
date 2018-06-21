"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var camera = require("nativescript-camera");
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
            _this.display(picture);
            _this.saveToFile(picture);
        });
    };
    AppComponent.prototype.display = function (picture) {
        this.pictures.push({
            path: picture
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFNaEQsNENBQThDO0FBRTlDLHNGQUFtRjtBQVNuRjtJQUdDLHNCQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUY1RCxhQUFRLEdBQWtCLEVBQUUsQ0FBQztJQUk3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBUUM7UUFQQSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJO1NBQ25FLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxPQUFPO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEIsSUFBSSxFQUFFLE9BQU87U0FDYixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLE9BQU87UUFBbEIsaUJBS0M7UUFKQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUMxQyxJQUFJLENBQUM7WUFDTCxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBcUIsR0FBckI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7YUFDckMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZDVyxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDdEIsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7WUFDaEMsV0FBVyxFQUFFLDBCQUEwQjtTQUN2QyxDQUFDO3lDQUl3QywyQ0FBbUI7T0FIaEQsWUFBWSxDQXdDeEI7SUFBRCxtQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gXG5pbXBvcnQgKiBhcyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgRmlsZVN5c3RlbSBmcm9tICdmaWxlLXN5c3RlbSc7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5cbmltcG9ydCB7IEltYWdlTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvaW1hZ2UtbWFuYWdlci9pbWFnZS1tYW5hZ2VyLnNlcnZpY2VcIjtcblxuIFxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInBnLW1haW5cIixcblx0c3R5bGVVcmxzOiBbXCJhcHAuY3NzXCJdLFxuXHRwcm92aWRlcnM6IFtJbWFnZU1hbmFnZXJTZXJ2aWNlXSxcblx0dGVtcGxhdGVVcmw6IFwibWFpbi9tYWluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cGljdHVyZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlTWFuYWdlclNlcnZpY2U6IEltYWdlTWFuYWdlclNlcnZpY2UpIHtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wb3B1bGF0ZVBpY3R1cmVzQXJyYXkoKTtcblx0fVxuXG5cdHRha2VQaWN0dXJlKCk6IHZvaWQge1xuXHRcdGNhbWVyYS50YWtlUGljdHVyZSh7IFxuXHRcdFx0d2lkdGg6IDQwMCwgaGVpZ2h0OiAxMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZVxuXHRcdH0pXG5cdFx0LnRoZW4oKHBpY3R1cmUpID0+IHtcblx0XHRcdHRoaXMuZGlzcGxheShwaWN0dXJlKTtcblx0XHRcdHRoaXMuc2F2ZVRvRmlsZShwaWN0dXJlKTtcblx0XHR9KTtcblx0fVxuXG5cdGRpc3BsYXkocGljdHVyZSkge1xuXHRcdHRoaXMucGljdHVyZXMucHVzaCh7XG5cdFx0XHRwYXRoOiBwaWN0dXJlXG5cdFx0fSk7XG5cdH1cblxuXHRzYXZlVG9GaWxlKHBpY3R1cmUpIHtcblx0XHR0aGlzLmltYWdlTWFuYWdlclNlcnZpY2Uuc2F2ZVRvRmlsZShwaWN0dXJlKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBvcHVsYXRlUGljdHVyZXNBcnJheSgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwb3B1bGF0ZVBpY3R1cmVzQXJyYXkoKSB7XG5cdFx0dGhpcy5pbWFnZU1hbmFnZXJTZXJ2aWNlLmdldEFsbEltYWdlcygpXG5cdFx0XHQudGhlbigoaW1hZ2VzKSA9PiB7XG5cdFx0XHRcdHRoaXMucGljdHVyZXMgPSBpbWFnZXM7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19