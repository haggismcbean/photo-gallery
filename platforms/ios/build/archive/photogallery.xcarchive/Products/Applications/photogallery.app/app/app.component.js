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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFHaEQsNENBQThDO0FBRTlDLHNGQUFtRjtBQVNuRjtJQUdDLHNCQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUY1RCxhQUFRLEdBQWtCLEVBQUUsQ0FBQztJQUk3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBT0M7UUFOQSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJO1NBQ25FLENBQUM7YUFDQSxJQUFJLENBQUMsVUFBQyxPQUFPO1lBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUFsQixpQkFLQztRQUpBLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQzFDLElBQUksQ0FBQztZQUNMLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFxQixHQUFyQjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRTthQUNyQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaENXLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN0QixTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztZQUNoQyxXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7eUNBSXdDLDJDQUFtQjtPQUhoRCxZQUFZLENBaUN4QjtJQUFELG1CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiBcbmltcG9ydCAqIGFzIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5cbmltcG9ydCB7IEltYWdlTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvaW1hZ2UtbWFuYWdlci9pbWFnZS1tYW5hZ2VyLnNlcnZpY2VcIjtcblxuIFxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcInBnLW1haW5cIixcblx0c3R5bGVVcmxzOiBbXCJhcHAuY3NzXCJdLFxuXHRwcm92aWRlcnM6IFtJbWFnZU1hbmFnZXJTZXJ2aWNlXSxcblx0dGVtcGxhdGVVcmw6IFwibWFpbi9tYWluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cGljdHVyZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGltYWdlTWFuYWdlclNlcnZpY2U6IEltYWdlTWFuYWdlclNlcnZpY2UpIHtcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5wb3B1bGF0ZVBpY3R1cmVzQXJyYXkoKTtcblx0fVxuXG5cdHRha2VQaWN0dXJlKCk6IHZvaWQge1xuXHRcdGNhbWVyYS50YWtlUGljdHVyZSh7IFxuXHRcdFx0d2lkdGg6IDQwMCwgaGVpZ2h0OiAxMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZVxuXHRcdH0pXG5cdFx0XHQudGhlbigocGljdHVyZSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNhdmVUb0ZpbGUocGljdHVyZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRcdHRoaXMuaW1hZ2VNYW5hZ2VyU2VydmljZS5zYXZlVG9GaWxlKHBpY3R1cmUpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMucG9wdWxhdGVQaWN0dXJlc0FycmF5KCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHBvcHVsYXRlUGljdHVyZXNBcnJheSgpIHtcblx0XHR0aGlzLmltYWdlTWFuYWdlclNlcnZpY2UuZ2V0QWxsSW1hZ2VzKClcblx0XHRcdC50aGVuKChpbWFnZXMpID0+IHtcblx0XHRcdFx0dGhpcy5waWN0dXJlcyA9IGltYWdlcztcblx0XHRcdH0pO1xuXHR9XG59XG4iXX0=