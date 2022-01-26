import { Injectable } from '@nestjs/common';
import LoginDto from './dto/login.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly baseUrl;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.baseUrl = configService.get<string>('api.trello');
  }

  login(data: LoginDto): Promise<any> {
    const url = 'https://trello.com/login';
    return lastValueFrom(
      this.httpService
        .post(url, {
          email: data.email,
          password: data.password,
        })
        .pipe(
          map((response) => {
            console.log(response);
          }),
        ),
    );
  }
}
