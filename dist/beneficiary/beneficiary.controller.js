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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficiaryController = void 0;
const common_1 = require("@nestjs/common");
const controller_core_1 = require("../common/core/controller.core");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const auth_guards_1 = require("../common/guards/auth.guards");
const beneficiary_service_1 = require("./beneficiary.service");
const create_beneficiary_dto_1 = require("./dto/create-beneficiary.dto");
let BeneficiaryController = class BeneficiaryController extends controller_core_1.CoreController {
    constructor(beneficiaryService) {
        super();
        this.beneficiaryService = beneficiaryService;
    }
    async createBeneficiary(dto, currentUser, res) {
        await this.beneficiaryService.createBeneficiary(dto, currentUser._id);
        return this.responseSuccess(res, '00', 'Success', dto, common_1.HttpStatus.CREATED);
    }
    async fetchBeneficiary(currentUser, res) {
        const resp = await this.beneficiaryService.fetchBeneficiary(currentUser._id);
        return this.responseSuccess(res, '00', 'Success', resp, common_1.HttpStatus.OK);
    }
    async removeBeneficiary(currentUser, id, res) {
        const resp = await this.beneficiaryService.removeBeneficiary(currentUser._id, id);
        return this.responseSuccess(res, '00', 'Success', resp, common_1.HttpStatus.OK);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beneficiary_dto_1.CreateBeneficiaryDto, Object, Object]),
    __metadata("design:returntype", Promise)
], BeneficiaryController.prototype, "createBeneficiary", null);
__decorate([
    (0, common_1.Get)('/view'),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BeneficiaryController.prototype, "fetchBeneficiary", null);
__decorate([
    (0, common_1.Delete)('/remove/:id'),
    (0, common_1.UseGuards)(auth_guards_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], BeneficiaryController.prototype, "removeBeneficiary", null);
BeneficiaryController = __decorate([
    (0, common_1.Controller)('beneficiary'),
    __metadata("design:paramtypes", [beneficiary_service_1.BeneficiaryService])
], BeneficiaryController);
exports.BeneficiaryController = BeneficiaryController;
//# sourceMappingURL=beneficiary.controller.js.map