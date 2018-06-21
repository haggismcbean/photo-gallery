"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileSystem = require("file-system");
var ImageSource = require("image-source");
var image_file_model_1 = require("./image-file.model");
var ImageManagerService = /** @class */ (function () {
    function ImageManagerService() {
        this.imagesSubdirectory = "images";
        this.folderDest = FileSystem.knownFolders.documents().getFolder(this.imagesSubdirectory);
        this.pictures = [];
    }
    ImageManagerService.prototype.getAllImages = function () {
        var _this = this;
        this.pictures = [];
        return this.folderDest.getEntities()
            .then(function (entities) {
            entities.forEach(function (entity, index) {
                _this.pictures.push(new image_file_model_1.ImageFile(String(index), entity.path));
            });
            return _this.pictures;
        });
    };
    ImageManagerService.prototype.saveToFile = function (picture) {
        var _this = this;
        return ImageSource.fromAsset(picture)
            .then(function (img) {
            var pathDest = FileSystem.path.join(_this.folderDest.path, _this.imagesSubdirectory + String(_this.pictures.length) + ".png");
            var saved = img.saveToFile(pathDest, "png");
        });
    };
    ImageManagerService = __decorate([
        core_1.Injectable()
    ], ImageManagerService);
    return ImageManagerService;
}());
exports.ImageManagerService = ImageManagerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdDQUEwQztBQUMxQywwQ0FBNEM7QUFFNUMsdURBQStDO0FBRy9DO0lBREE7UUFFUyx1QkFBa0IsR0FBRyxRQUFRLENBQUM7UUFDOUIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTVGLGFBQVEsR0FBa0IsRUFBRSxDQUFDO0lBc0I5QixDQUFDO0lBcEJBLDBDQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTthQUNsQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDRCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLE9BQU87UUFBbEIsaUJBTUM7UUFMQSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDbkMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNULElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUM3SCxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF6QlcsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0ICogYXMgRmlsZVN5c3RlbSBmcm9tICdmaWxlLXN5c3RlbSc7XG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuXG5pbXBvcnQgeyBJbWFnZUZpbGUgfSBmcm9tIFwiLi9pbWFnZS1maWxlLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZU1hbmFnZXJTZXJ2aWNlIHtcblx0cHJpdmF0ZSBpbWFnZXNTdWJkaXJlY3RvcnkgPSBcImltYWdlc1wiO1xuXHRwcml2YXRlIGZvbGRlckRlc3QgPSBGaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5nZXRGb2xkZXIodGhpcy5pbWFnZXNTdWJkaXJlY3RvcnkpO1xuXG5cdHBpY3R1cmVzOiBBcnJheTxPYmplY3Q+ID0gW107XG5cblx0Z2V0QWxsSW1hZ2VzKCkge1xuXHRcdHRoaXMucGljdHVyZXMgPSBbXTtcblxuXHRcdHJldHVybiB0aGlzLmZvbGRlckRlc3QuZ2V0RW50aXRpZXMoKVxuXHRcdFx0LnRoZW4oKGVudGl0aWVzKT0+IHtcblx0XHRcdFx0ZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGljdHVyZXMucHVzaChuZXcgSW1hZ2VGaWxlKFN0cmluZyhpbmRleCksIGVudGl0eS5wYXRoKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzLnBpY3R1cmVzO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzYXZlVG9GaWxlKHBpY3R1cmUpIHtcblx0XHRyZXR1cm4gSW1hZ2VTb3VyY2UuZnJvbUFzc2V0KHBpY3R1cmUpXG5cdFx0XHQudGhlbigoaW1nKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhdGhEZXN0ID0gRmlsZVN5c3RlbS5wYXRoLmpvaW4odGhpcy5mb2xkZXJEZXN0LnBhdGgsIHRoaXMuaW1hZ2VzU3ViZGlyZWN0b3J5ICsgU3RyaW5nKHRoaXMucGljdHVyZXMubGVuZ3RoKSArIFwiLnBuZ1wiKTtcblx0XHRcdFx0Y29uc3Qgc2F2ZWQgPSBpbWcuc2F2ZVRvRmlsZShwYXRoRGVzdCwgXCJwbmdcIik7XG5cdFx0XHR9KTtcblx0fVxufSJdfQ==