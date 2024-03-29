import CryptoJS from "crypto-js";

/**
 * DES操作
 * @description
 * 加密解密
 */
const cryptoUtils = {
  // 加密
  encryptByDES(strMessage, key) {
    key = key || "\u0067\u0072\u0065\u0061\u0074\u006d\u0061\u0070";
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(strMessage, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },
  // 解密
  decryptByDES(strMessage, key) {
    key = key || "\u0067\u0072\u0065\u0061\u0074\u006d\u0061\u0070";
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const decrypted = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Base64.parse(strMessage),
      },
      keyHex,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
  },
};

export default cryptoUtils;
