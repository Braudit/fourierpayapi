/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CoreService } from 'src/common/core/service.core';
import { WalletService } from 'src/wallet/wallet.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFactory } from './user.factory';
import { User } from './user.model';
import { UserRepository } from './user.repository';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailService } from 'src/email.service';
import { ResetPasswordDto } from 'src/auth/dto/create-auth.dto';
import { SubscriptionService } from 'src/subscription/services/subscription.service';
import { SubscriptionSettingService } from 'src/subscription/services/subscription-setting.service';
import { AllUserDto } from 'src/admin/dtos/user.dto';
import { CoreSearchFilterDatePaginationDto } from 'src/common/core/dto.core';
export declare class UserService extends CoreService<UserRepository> {
    private readonly userRepository;
    private readonly userFactory;
    private readonly walletService;
    private readonly subscriptionService;
    private readonly subscriptionSettingService;
    private readonly mailerService;
    private readonly emailService;
    constructor(userRepository: UserRepository, userFactory: UserFactory, walletService: WalletService, subscriptionService: SubscriptionService, subscriptionSettingService: SubscriptionSettingService, mailerService: MailerService, emailService: EmailService);
    createSuperAcount(data: CreateUserDto): Promise<any>;
    create(data: CreateUserDto): Promise<any>;
    updateUser(data: UpdateUserDto, user_id: string): Promise<any>;
    profile(user_id: string): Promise<User>;
    confirmEmail(token: string): Promise<any>;
    resetPassword(token: string, dto: ResetPasswordDto): Promise<any>;
    updateToken(query: Record<string, any>): Promise<any>;
    allUsers(query: AllUserDto): Promise<{
        data: Omit<User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        }, never>[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    allCountUsers(): Promise<{
        data: {
            active: number;
            inactive: number;
        };
    }>;
    countUsers(query: CoreSearchFilterDatePaginationDto): Promise<{
        data: {
            all: number;
            active: number;
            inactive: number;
        };
    }>;
    dashboardCount(query: CoreSearchFilterDatePaginationDto): Promise<number>;
}
