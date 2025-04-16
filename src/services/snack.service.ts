import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Snack } from '../models/snack';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  private storageKey = 'snacks';

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
    ){

    }

  getSnacks(): Snack[] {
    if (isPlatformServer(this.platformId))  return []
    let snacks =JSON.parse(localStorage.getItem(this.storageKey)|| '[]')

    if(snacks.length ===0){
      snacks.push({ id: Date.now(), name: "Frikandel", amount: 0 })
      snacks.push({ id: Date.now(), name: "Kroket", amount: 0 })
      snacks.push({ id: Date.now(), name: "Kipnuggets", amount: 0 })
    }

    return  snacks
  }

  saveSnacks(snacks: Snack[]): void {
    if (isPlatformServer(this.platformId))  return 
    localStorage.setItem(this.storageKey, JSON.stringify(snacks));
  }
}
