    import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentSnapshot, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
    import { Injectable } from "@angular/core";
    import { Task } from "../tasks/task.model";

    @Injectable({
        providedIn: "root"
    })
    
    


    export class TasksService {
        constructor(   private firestore: AngularFirestore   ) {}

        createTask(data: Task) {
            return new Promise<any>((resolve, reject) =>{
                this.firestore
                    .collection("tasks")
                    .add({
                        title: data.name,
                        completed: data.completed,
                        dueDate: data.dueDate
                    })
                    .then(res => {}, err => reject(err));
            });
        }

        getTasksFromFirebase() {
            return this.firestore.collection('tasks', ref => ref.orderBy('dueDate', 'desc')).snapshotChanges();

            // let tasks: Object[] = [ ]
            // this.firestore.collection("tasks").get().toPromise().then((querySnapshot) => {
            //     querySnapshot.forEach((doc) => {
            //         // doc.data() is never undefined for query doc snapshots
            //         // console.log(doc.id, " => ", doc.data());
            //         tasks.push(doc.data())
            //         // tasks.push(doc.id)
            //     });
            // });
            // console.log(tasks)
            
            // return tasks;
        }
        deleteTaskInFirebase(taskId){
         // console.log(todo.payload.doc.id)
         return this.firestore.collection('tasks').doc(taskId).delete();          
        }

    }