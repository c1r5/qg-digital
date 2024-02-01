import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { CandidateModule } from './candidate/candidate.module';
import { VoterModule } from './voter/voter.module';
import { MemberModule } from './member/member.module';

@Module({
    imports: [
        CandidateModule,
        VoterModule,
        MemberModule
    ],
    controllers: [ApiController],
    providers: [ApiService]
})

export class ApiModule { }
