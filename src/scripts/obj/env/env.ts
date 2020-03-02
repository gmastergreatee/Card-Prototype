import { remote } from 'electron';

export class Environment {
    public static IsDevelopmentEnvironment(): boolean {
        return remote.process.argv[2] == '--dev';
    }
}
