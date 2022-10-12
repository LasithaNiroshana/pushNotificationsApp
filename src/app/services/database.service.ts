import { Injectable } from '@angular/core';
import {Firestore,collectionData} from '@angular/fire/firestore';
import {collection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore:Firestore) { }

 getTopicCollection(){
  const topicsRef=collection(this.firestore,'Topics');
  return collectionData(topicsRef);
 }

}
