"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageSource = require("image-source");
var FileSystem = require("file-system");
var camera = require("nativescript-camera");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.groceryList = [];
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
            var pathDest = FileSystem.path.join(folderDest.path, "test.png");
            var saved = img.saveToFile(pathDest, "png");
            if (saved) {
                console.info("Image saved successfully!");
            }
        });
    };
    AppComponent.prototype.loadFromFile = function () {
        var _this = this;
        var folderDest = FileSystem.knownFolders.documents();
        var pathDest = FileSystem.path.join(folderDest.path, "test.png");
        console.log('path: ', folderDest.path);
        folderDest.getEntities()
            .then(function (entities) {
            entities.forEach(function (entity) {
                _this.picturePlaceholderPath = entity.path;
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "pg-main",
            styleUrls: ["app.css"],
            templateUrl: "main/main.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFJeEMsMENBQTRDO0FBQzVDLHdDQUEwQztBQUMxQyw0Q0FBOEM7QUFPOUM7SUFMQTtRQU1DLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLDJCQUFzQixHQUFHLDhCQUE4QixDQUFDO0lBMkN6RCxDQUFDO0lBekNBLCtCQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBBLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUk7U0FDbkUsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLE9BQU87WUFDYixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLE9BQU87UUFDZCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNqQixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1QsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2RCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ25FLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQUEsaUJBVUM7UUFUQSxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7YUFDdEIsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNkLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO2dCQUN2QixLQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVDVyxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtTQUN2QyxDQUFDO09BQ1csWUFBWSxDQTZDeEI7SUFBRCxtQkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuIFxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgRmlsZVN5c3RlbSBmcm9tICdmaWxlLXN5c3RlbSc7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG4gXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwicGctbWFpblwiLFxuXHRzdHlsZVVybHM6IFtcImFwcC5jc3NcIl0sXG5cdHRlbXBsYXRlVXJsOiBcIm1haW4vbWFpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGdyb2NlcnlMaXN0ID0gW107XG5cdHBpY3R1cmVQbGFjZWhvbGRlclBhdGggPSBcIn4vaW1hZ2VzL3BsYWNlaG9sZGVyLWltZy5qcGdcIjtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmxvYWRGcm9tRmlsZSgpO1xuXHR9XG5cblx0dGFrZVBpY3R1cmUoKTogdm9pZCB7XG5cdFx0Y2FtZXJhLnRha2VQaWN0dXJlKHsgXG5cdFx0XHR3aWR0aDogNDAwLCBoZWlnaHQ6IDEwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiB0cnVlXG5cdFx0fSlcblx0XHQudGhlbigocGljdHVyZSkgPT4ge1xuXHRcdFx0dGhpcy5kaXNwbGF5KHBpY3R1cmUpO1xuXHRcdFx0dGhpcy5zYXZlVG9GaWxlKHBpY3R1cmUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZGlzcGxheShwaWN0dXJlKSB7XG5cdFx0dGhpcy5waWN0dXJlUGxhY2Vob2xkZXJQYXRoID0gcGljdHVyZTtcblx0fVxuXG5cdHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRcdEltYWdlU291cmNlLmZyb21Bc3NldChwaWN0dXJlKVxuXHRcdFx0LnRoZW4oKGltZykgPT4ge1xuXHRcdFx0XHRjb25zdCBmb2xkZXJEZXN0ID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cdFx0XHRcdGNvbnN0IHBhdGhEZXN0ID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyRGVzdC5wYXRoLCBcInRlc3QucG5nXCIpO1xuXHRcdFx0XHRjb25zdCBzYXZlZCA9IGltZy5zYXZlVG9GaWxlKHBhdGhEZXN0LCBcInBuZ1wiKTtcblx0XHRcdFx0aWYgKHNhdmVkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKFwiSW1hZ2Ugc2F2ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRsb2FkRnJvbUZpbGUoKSB7XG5cdFx0Y29uc3QgZm9sZGVyRGVzdCA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuXHRcdGNvbnN0IHBhdGhEZXN0ID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4oZm9sZGVyRGVzdC5wYXRoLCBcInRlc3QucG5nXCIpO1xuXHRcdGNvbnNvbGUubG9nKCdwYXRoOiAnLCBmb2xkZXJEZXN0LnBhdGgpO1xuXHRcdGZvbGRlckRlc3QuZ2V0RW50aXRpZXMoKVxuXHRcdFx0LnRoZW4oKGVudGl0aWVzKT0+IHtcblx0XHRcdFx0ZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWN0dXJlUGxhY2Vob2xkZXJQYXRoID0gZW50aXR5LnBhdGg7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==