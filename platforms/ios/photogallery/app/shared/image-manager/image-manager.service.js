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
                _this.pictures.unshift(new image_file_model_1.ImageFile(String(index), entity.path));
            });
            return _this.pictures;
        });
    };
    ImageManagerService.prototype.saveToFile = function (picture) {
        var _this = this;
        return ImageSource.fromAsset(picture)
            .then(function (img) {
            var pathDest = FileSystem.path.join(_this.folderDest.path, String(_this.pictures.length) + ".png");
            var saved = img.saveToFile(pathDest, "png");
        });
    };
    ImageManagerService = __decorate([
        core_1.Injectable()
    ], ImageManagerService);
    return ImageManagerService;
}());
exports.ImageManagerService = ImageManagerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdDQUEwQztBQUMxQywwQ0FBNEM7QUFFNUMsdURBQStDO0FBRy9DO0lBREE7UUFFUyx1QkFBa0IsR0FBRyxRQUFRLENBQUM7UUFDOUIsZUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTVGLGFBQVEsR0FBa0IsRUFBRSxDQUFDO0lBc0I5QixDQUFDO0lBcEJBLDBDQUFZLEdBQVo7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTthQUNsQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLDRCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLE9BQU87UUFBbEIsaUJBTUM7UUFMQSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDbkMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNULElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ25HLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCVyxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTtPQUNBLG1CQUFtQixDQTBCL0I7SUFBRCwwQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBGaWxlU3lzdGVtIGZyb20gJ2ZpbGUtc3lzdGVtJztcbmltcG9ydCAqIGFzIEltYWdlU291cmNlIGZyb20gJ2ltYWdlLXNvdXJjZSc7XG5cbmltcG9ydCB7IEltYWdlRmlsZSB9IGZyb20gXCIuL2ltYWdlLWZpbGUubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlTWFuYWdlclNlcnZpY2Uge1xuXHRwcml2YXRlIGltYWdlc1N1YmRpcmVjdG9yeSA9IFwiaW1hZ2VzXCI7XG5cdHByaXZhdGUgZm9sZGVyRGVzdCA9IEZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLmdldEZvbGRlcih0aGlzLmltYWdlc1N1YmRpcmVjdG9yeSk7XG5cblx0cGljdHVyZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuXHRnZXRBbGxJbWFnZXMoKSB7XG5cdFx0dGhpcy5waWN0dXJlcyA9IFtdO1xuXG5cdFx0cmV0dXJuIHRoaXMuZm9sZGVyRGVzdC5nZXRFbnRpdGllcygpXG5cdFx0XHQudGhlbigoZW50aXRpZXMpPT4ge1xuXHRcdFx0XHRlbnRpdGllcy5mb3JFYWNoKChlbnRpdHksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5waWN0dXJlcy51bnNoaWZ0KG5ldyBJbWFnZUZpbGUoU3RyaW5nKGluZGV4KSwgZW50aXR5LnBhdGgpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMucGljdHVyZXM7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNhdmVUb0ZpbGUocGljdHVyZSkge1xuXHRcdHJldHVybiBJbWFnZVNvdXJjZS5mcm9tQXNzZXQocGljdHVyZSlcblx0XHRcdC50aGVuKChpbWcpID0+IHtcblx0XHRcdFx0Y29uc3QgcGF0aERlc3QgPSBGaWxlU3lzdGVtLnBhdGguam9pbih0aGlzLmZvbGRlckRlc3QucGF0aCwgU3RyaW5nKHRoaXMucGljdHVyZXMubGVuZ3RoKSArIFwiLnBuZ1wiKTtcblx0XHRcdFx0Y29uc3Qgc2F2ZWQgPSBpbWcuc2F2ZVRvRmlsZShwYXRoRGVzdCwgXCJwbmdcIik7XG5cdFx0XHR9KTtcblx0fVxufSJdfQ==