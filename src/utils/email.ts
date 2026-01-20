/**
 * Email Obfuscation Utilities
 * Prevents email scraping by bots and AI crawlers
 *
 * Strategy: Encode email parts in Base64 at build time,
 * decode via JavaScript only on user interaction
 */

import { AUTHOR_EMAIL } from "../consts";

/**
 * Split and encode email for obfuscation
 * @returns Object with Base64 encoded user and domain parts
 */
export function getObfuscatedEmail() {
  const [user, domain] = AUTHOR_EMAIL.split("@");
  return {
    encodedUser: Buffer.from(user).toString("base64"),
    encodedDomain: Buffer.from(domain).toString("base64"),
  };
}
