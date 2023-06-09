"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModule = void 0;
const common_1 = require("@nestjs/common");
const link_service_1 = require("./link.service");
const link_controller_1 = require("./link.controller");
const link_repository_1 = require("./link.repository");
const mongoose_1 = require("@nestjs/mongoose");
const link_model_1 = require("./link.model");
const link_factory_1 = require("./link.factory");
let LinkModule = class LinkModule {
};
LinkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Link', schema: link_model_1.LinkSchema }]),
        ],
        controllers: [link_controller_1.LinkController],
        providers: [link_service_1.LinkService, link_repository_1.LinkRepository, link_factory_1.LinkFactory],
        exports: [link_service_1.LinkService, link_repository_1.LinkRepository],
    })
], LinkModule);
exports.LinkModule = LinkModule;
//# sourceMappingURL=link.module.js.map