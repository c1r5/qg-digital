import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './routes/api/api.module';
import { RouterModule } from '@nestjs/core';
import { CandidateModule } from './routes/api/candidate/candidate.module';
import { MemberModule } from './routes/api/member/member.module';
import { VoterModule } from './routes/api/voter/voter.module';

@Module({
  imports: [ApiModule, RouterModule.register(
    [
      {
        path: 'api',
        module: ApiModule,
        children: [
          {
            path: 'candidate',
            module: CandidateModule
          }, {
            path: 'member',
            module: MemberModule
          }, {
            path: 'voter',
            module: VoterModule
          }
        ]
      }
    ]
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
