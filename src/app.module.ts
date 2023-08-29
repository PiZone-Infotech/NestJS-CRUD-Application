import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    CoursesModule,
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'studentdb' }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
