import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class CreatorsRepository {
  async authenticate(): Promise<string> {
    let response: AxiosResponse<any>;

    const payload = new URLSearchParams();
    payload.append('username', 'agent6');
    payload.append('password', 'agent6');
    payload.append('grant_type', 'password');
    payload.append('tocken_type', 'bearer');
    payload.append('client_secret', 'e5d2b5c1-4211-48aa-b272-91d75f4ab0e5');
    payload.append('client_id', 'agentService');

    try {
      response = await axios({
        method: 'POST',
        url:
          'http://185.209.114.26:9001/auth/realms/plutdev/protocol/openid-connect/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: payload,
      });
    } catch (e) {
      return '';
    }

    return response.data.access_token;
  }

  
}
