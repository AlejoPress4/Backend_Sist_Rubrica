import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../../application/services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('app.jwtSecret') || 'defaultSecret',
        });
    }

    async validate(payload: JwtPayload) {
        return {
            userId: payload.sub,
            rol: payload.rol,
            nombre: payload.nombre,
            docenteId: payload.docenteId,
            estudianteId: payload.estudianteId,
        };
    }
}
