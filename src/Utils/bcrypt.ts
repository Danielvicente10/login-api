import * as bcrypt from 'bcrypt';

export class BcryptUtil {
  static async generateSalt(rounds: number = 10): Promise<string> {
    return await bcrypt.genSalt(rounds);
  }

  static async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  static async comparePasswords(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
