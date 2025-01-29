import { AfterViewInit, Directive, EventEmitter, HostBinding, Output } from "@angular/core";

@Directive({
    selector: '[MyChangeBackground]',
})

export class MyChangeBackgroundDirective implements AfterViewInit {


    public urls: string[] = [
        'url("assets/images/col1.jpg")',
        'url("assets/images/col2.jpg")',
        'url("assets/images/col3.jpg")'
      ]

      public url: string = '';

      public ind: number = 0;
    
      @HostBinding('style.background-image') backgroundImg: string = 'url("assets/images/col1.jpg")';

    
      @Output() slideSWitch = new EventEmitter();

    
      ngAfterViewInit(): void {
        setInterval(() => {
          this.backgroundImg = this.ChangeUrl();
          this.slideSWitch.emit(this.ind);
          console.log(this.ind);
          
        }, 7000)
      }
    
      private ChangeUrl(): string {
        return this.urls[++this.ind % this.urls.length]
      }

        
        // console.log(this.urls[Math.floor(Math.random()*this.urls.length)].toString())
        // return this.urls[Math.floor(Math.random()*this.urls.length)].toString();
      

      
    
}