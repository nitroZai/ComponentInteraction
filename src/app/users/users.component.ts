import { Component, EventEmitter, Output } from '@angular/core';

@Component({

    selector: 'app-users',
    templateUrl: './users.component.html'

})
export class UsersComponent{

    usersList = ['cm'];

    name = '';

    onNameChange(){
        this.name = 'HI ra'
    }

    // onUsernameChange(event: any){
    //     this.userName = event.target.value;
    // }

    onButtonClicked(event: string){
        this.usersList.push(event);
    }

    onMakingListEmpty(){
        this.usersList = [];
    }

}