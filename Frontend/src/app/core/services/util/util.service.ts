import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  encryptKey = "AIzaSyBnOzbMr90BullFrogSpasEncryptionKey90rMbzOnBySazIA";

  constructor() { }

  /**
   * this function is used for decrypting the data using crypto-JS.
   * @params data
   * @params key
   */
  decrypt(data: string, key: string = this.encryptKey) : string {
    return AES.decrypt(data,key).toString(enc.utf8);
  }

  /**
   * this fucntion is used to encrypting data using crypto-JS
   * @params data
   * @params key
   */
  encrypt(data: string, key: string = this.encryptKey) : string {
    return AES.encrypt(data,key).toString();
  }

  /**
   * This function generate a randomn number
   * @param digit
   * @return number
   */
  randomNumber(digit: number = 60000){
    return Math.floor(10000 + Math.random() * digit);
  }

}
