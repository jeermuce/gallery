import crypto from "crypto";

function getGravatarUrl(email = "ernesto_mc.dev@proton.me") {
  const trimmed = email.trim().toLowerCase();

  const hash = crypto.createHash("md5").update(trimmed).digest("hex");

  return `https://gravatar.com/avatar/${hash}?size=256`;
}

export default getGravatarUrl;
