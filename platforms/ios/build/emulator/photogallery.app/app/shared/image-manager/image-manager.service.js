"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileSystem = require("file-system");
var ImageSource = require("image-source");
var image_file_model_1 = require("./image-file.model");
var ImageManagerService = /** @class */ (function () {
    function ImageManagerService() {
        this.pictures = [];
    }
    ImageManagerService.prototype.getAllImages = function () {
        var _this = this;
        this.pictures = [];
        var folderDest = FileSystem.knownFolders.documents();
        return folderDest.getEntities()
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
            var folderDest = FileSystem.knownFolders.documents();
            var pathDest = FileSystem.path.join(folderDest.path, String(_this.pictures.length) + ".png");
            var saved = img.saveToFile(pathDest, "png");
        });
    };
    ImageManagerService = __decorate([
        core_1.Injectable()
    ], ImageManagerService);
    return ImageManagerService;
}());
exports.ImageManagerService = ImageManagerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdDQUEwQztBQUMxQywwQ0FBNEM7QUFFNUMsdURBQStDO0FBRy9DO0lBREE7UUFFQyxhQUFRLEdBQWtCLEVBQUUsQ0FBQztJQXlCOUIsQ0FBQztJQXZCQSwwQ0FBWSxHQUFaO1FBQUEsaUJBYUM7UUFaQSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXZELE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO2FBQzdCLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDZCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFFLEtBQUs7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsT0FBTztRQUFsQixpQkFPQztRQU5BLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1QsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2RCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQzlGLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCVyxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTtPQUNBLG1CQUFtQixDQTBCL0I7SUFBRCwwQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gJ2ZpbGUtc3lzdGVtJztcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gJ2ltYWdlLXNvdXJjZSc7XG5cbmltcG9ydCB7IEltYWdlRmlsZSB9IGZyb20gXCIuL2ltYWdlLWZpbGUubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlTWFuYWdlclNlcnZpY2Uge1xuXHRwaWN0dXJlczogQXJyYXk8T2JqZWN0PiA9IFtdO1xuXG5cdGdldEFsbEltYWdlcygpIHtcblx0XHR0aGlzLnBpY3R1cmVzID0gW107XG5cblx0XHRjb25zdCBmb2xkZXJEZXN0ID0gRmlsZVN5c3RlbS5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cblx0XHRyZXR1cm4gZm9sZGVyRGVzdC5nZXRFbnRpdGllcygpXG5cdFx0XHQudGhlbigoZW50aXRpZXMpPT4ge1xuXHRcdFx0XHRlbnRpdGllcy5mb3JFYWNoKChlbnRpdHksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWN0dXJlcy5wdXNoKG5ldyBJbWFnZUZpbGUoU3RyaW5nKGluZGV4KSwgZW50aXR5LnBhdGgpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMucGljdHVyZXM7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRcdHJldHVybiBJbWFnZVNvdXJjZS5mcm9tQXNzZXQocGljdHVyZSlcblx0XHRcdC50aGVuKChpbWcpID0+IHtcblx0XHRcdFx0Y29uc3QgZm9sZGVyRGVzdCA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuXHRcdFx0XHRjb25zdCBwYXRoRGVzdCA9IEZpbGVTeXN0ZW0ucGF0aC5qb2luKGZvbGRlckRlc3QucGF0aCwgU3RyaW5nKHRoaXMucGljdHVyZXMubGVuZ3RoKSArIFwiLnBuZ1wiKTtcblx0XHRcdFx0Y29uc3Qgc2F2ZWQgPSBpbWcuc2F2ZVRvRmlsZShwYXRoRGVzdCwgXCJwbmdcIik7XG5cdFx0XHR9KTtcblx0fVxufSJdfQ==