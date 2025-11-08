import { Component, OnChanges, SimpleChanges,Input ,OnInit,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  constructor(){
    console.log('constructor triggered');
    console.log(this.name)
  }
    
  
  
  
  @Input() name:string='';
  counter:number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Triggered');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit triggered');
    console.log(this.name);
  }

  ngDoCheck(): void { 
    console.log('ngDoCheck triggerd')
  }

  incrementCounter(){
    this.counter++
  }

  ngAfterContentInit():void{
    console.log('ngAfterContentInit triggered')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit triggered.')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy triggered')
  }
  
}
