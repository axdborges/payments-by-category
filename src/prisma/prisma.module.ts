import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
// DESCOMENTAR CASO OUTRA FORMA NÃO FUNCIONE
// @Module({
//   providers: [
//     {
//       provide: PrismaClient,
//       useFactory: () => {
//         const prisma = new PrismaClient();
//         prisma.$connect();
//         return prisma;
//       },
//     },
//   ],
//   exports: [PrismaClient],
// })
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
  })

export class PrismaModule {}

