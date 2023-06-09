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
exports.AdminPaymentLinkService = void 0;
const common_1 = require("@nestjs/common");
const payment_link_service_1 = require("../../payment-link/payment-link.service");
let AdminPaymentLinkService = class AdminPaymentLinkService {
    constructor(paymentLinkService) {
        this.paymentLinkService = paymentLinkService;
    }
    async paymentLinks(query) {
        const resp = await this.paymentLinkService.adminPaymentLink(query);
        return resp;
    }
    async paymentLinksCount(query) {
        const resp = await this.paymentLinkService.adminPaymentLinksCount(query);
        return resp;
    }
};
AdminPaymentLinkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [payment_link_service_1.PaymentLinkService])
], AdminPaymentLinkService);
exports.AdminPaymentLinkService = AdminPaymentLinkService;
//# sourceMappingURL=payment-link.service.js.map