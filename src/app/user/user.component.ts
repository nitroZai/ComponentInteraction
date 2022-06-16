import { Component, Input, OnInit, OnChanges, SimpleChanges, 
    DoCheck, AfterContentInit, AfterContentChecked,
     AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';

@Component({

    selector: 'app-user',
    templateUrl: './user.component.html'

})
export class UserComponent implements OnInit, 
OnChanges,
 DoCheck, AfterContentInit, 
 AfterContentChecked,
 AfterViewInit, AfterViewChecked,
 OnDestroy{

    @Input() userName!: string;
    @Input() name!: string;
    @ContentChild('userParagraph') userParagraph!: ElementRef;

    constructor(){
        console.log("Constructor: I'm your lord you ass");
    }

    // This is the first method that is fired, The Initializations
    ngOnInit(){
        console.log("OnInit: OnInit");
    }

    // OnChanges is triggered whenever there's a change to Input Properties
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Onchanges: OnChanges Triggered")
        console.log(changes)       
    }

    ngDoCheck(): void {
        console.log("DoCheck: DoCheck is here, fuckers")
    }

    ngAfterContentInit(): void {

        console.log("NgContentInit: ng-Content Initiatilzed")
        console.log(this.userParagraph.nativeElement.textContent);

    }

    ngAfterContentChecked(): void {
        
        console.log("ContentChecked: Content Checked")
        
    }

    ngAfterViewInit(): void {
        
        console.log("ViewInit: After View Init")
        console.log(this.userParagraph.nativeElement.textContent)
    }

    ngAfterViewChecked(): void {

        console.log("ViewChecked: AfterView Checked")

    }

    ngOnDestroy(): void {

        console.log("Destroyed: Destroyed your life bitch")
        
    }

}