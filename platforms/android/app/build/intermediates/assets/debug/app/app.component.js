"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var photo_service_1 = require("./shared/photo/photo.service");
var file_manager_service_1 = require("./shared/file-manager/file-manager.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(photoService, fileManagerService) {
        this.photoService = photoService;
        this.fileManagerService = fileManagerService;
        // this.photo = new Photo();
        // this.file = new File();
    }
    AppComponent.prototype.takePhoto = function () {
        console.info("takePhoto");
    };
    AppComponent.prototype.upload = function () {
        console.info("takePhoto");
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTREO0FBQzVELG1GQUFnRjtBQU9oRjtJQUNDLHNCQUFvQixZQUEwQixFQUFVLGtCQUFzQztRQUExRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDN0YsNEJBQTRCO1FBQzVCLDBCQUEwQjtJQUMzQixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFaVyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLHlDQUFrQixDQUFDO1lBQzdDLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzt5Q0FFaUMsNEJBQVksRUFBOEIseUNBQWtCO09BRGxGLFlBQVksQ0FheEI7SUFBRCxtQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBob3RvU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9waG90by9waG90by5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGaWxlTWFuYWdlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvZmlsZS1tYW5hZ2VyL2ZpbGUtbWFuYWdlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwZy1tYWluXCIsXG4gIHByb3ZpZGVyczogW1Bob3RvU2VydmljZSwgRmlsZU1hbmFnZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwibWFpbi9tYWluLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwaG90b1NlcnZpY2U6IFBob3RvU2VydmljZSwgcHJpdmF0ZSBmaWxlTWFuYWdlclNlcnZpY2U6IEZpbGVNYW5hZ2VyU2VydmljZSkge1xuXHRcdC8vIHRoaXMucGhvdG8gPSBuZXcgUGhvdG8oKTtcblx0XHQvLyB0aGlzLmZpbGUgPSBuZXcgRmlsZSgpO1xuXHR9XG5cblx0dGFrZVBob3RvKCkge1xuXHRcdGNvbnNvbGUuaW5mbyhcInRha2VQaG90b1wiKTtcblx0fVxuXG5cdHVwbG9hZCgpIHtcblx0XHRjb25zb2xlLmluZm8oXCJ0YWtlUGhvdG9cIik7XG5cdH1cbn1cbiJdfQ==