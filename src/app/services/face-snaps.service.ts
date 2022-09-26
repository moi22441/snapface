import { Injectable } from '@angular/core';
import { max } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
        {
        id:1,
        title : 'Archi',
        description :'descrip',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
        snaps : 0
        },
        {
            id:2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 300,
          location : 'Lyon'
        },
        {
            id:3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];
    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapID : number) : FaceSnap {
        const FaceSnap = this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapID);
        if (FaceSnap){
            return FaceSnap
        } else{
            throw new Error('FaceSnap not found !');
        }
    }

    snapFaceSnapById(faceSnapID: number, snapType: 'snap' | 'unsnap') : void{
        const FaceSnap = this.getFaceSnapById(faceSnapID);
        snapType === "snap" ? FaceSnap.snaps++ : FaceSnap.snaps--;
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      const faceSnap: FaceSnap = {
        ...formValue,
        snaps:0,
        createdDate: new Date(),
        id : this.faceSnaps[this.faceSnaps.length -1 ].id + 1
      };
      this.faceSnaps.push(faceSnap);

    }
}