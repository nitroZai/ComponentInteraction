import { Component, Output, EventEmitter, ViewChild, ElementRef }    from '@angular/core';

@Component({

    selector: 'app-add-user',
    templateUrl: './add-user.component.html'

})
export class AddUserComponent {

    @Output() userNameEmitter = new EventEmitter<string>();

    // userName!: string;

    @ViewChild('userName') userName!: ElementRef; 

    // userNameFunc(event: any){
    //     this.userName = event.target.value;
    // }

    onButtonClicked(){
        this.userNameEmitter.emit(this.userName.nativeElement.value);
    }

}