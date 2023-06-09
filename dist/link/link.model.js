"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkSchema = exports.Link = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const link_enum_1 = require("./link.enum");
let Link = class Link {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Link.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'default' }),
    __metadata("design:type", String)
], Link.prototype, "link_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: null }),
    __metadata("design:type", Number)
], Link.prototype, "number_of_payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        enum: link_enum_1.LinkUsageEnum,
        default: link_enum_1.LinkUsageEnum.AVAILABLE,
    }),
    __metadata("design:type", String)
], Link.prototype, "usage", void 0);
Link = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Link);
exports.Link = Link;
exports.LinkSchema = mongoose_1.SchemaFactory.createForClass(Link);
//# sourceMappingURL=link.model.js.map