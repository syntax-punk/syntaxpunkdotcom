import crypto from 'crypto';

export function createUnsubscribeToken(email: string): string {
  return crypto
    .createHmac('sha256', process.env.UNSUBSCRIBE_SECRET as string)
    .update(email.toLowerCase())
    .digest('hex');
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = Buffer.from(createUnsubscribeToken(email));
  const actual = Buffer.from(token);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}
