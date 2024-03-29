import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { User } from 'src/entities/users.entity';
import UserModel from 'src/models/user.model';
import { CreateCreatorDto } from '../dto/create-creator.dto';

@Injectable()
export class CreatorsRepository {
  platformId = 'c1f37217-02b6-4a6e-938f-acd06025d2fd';

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

  async registerSelfEmployed(
    token: string,
    payload: CreateCreatorDto,
  ): Promise<string> {
    let response: AxiosResponse<any>;

    try {
      response = await axios({
        method: 'POST',
        url: 'http://185.209.114.26:8080/subject/person/individual/',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          externalId: this.platformId,
          nationality: payload.nationality,
          initials: {
            firstName: payload.firstName,
            lastName: payload.lastName,
            patronymic: payload.patronymic,
          },
          inn: {
            inn: payload.inn,
          },
          phone: {
            phone: payload.phone,
          },
        },
      });
    } catch (e) {
      return '';
    }

    return response.data.id;
  }

  async bindSelfEmployed(token: string, personId: string): Promise<string> {
    let response: AxiosResponse<any>;

    try {
      response = await axios({
        method: 'PUT',
        url: `http://185.209.114.26:8080/subject/smz/${personId}/bind`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          externalId: this.platformId,
          permissions: [
            'INCOME_REGISTRATION',
            'PAYMENT_INFORMATION',
            'INCOME_LIST',
            'INCOME_SUMMARY',
            'CANCEL_INCOME',
          ],
        },
      });
    } catch (e) {
      return '';
    }

    return response.data.id;
  }

  addSelfEmployedIdToUser(id: number, selfEmployedId: string): Promise<User> {
    return UserModel.query().patchAndFetchById(id, { selfEmployedId });
  }
}
