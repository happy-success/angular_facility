import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  ngOnInit(): void {

  }

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  private _counter = 1;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  selected = '1';

  siteChange(e) {
    console.log(e.value);
  }

  attChange(e) {
    console.log(e.value);
    let att = e.value;
    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.att = att;
  }

  selectedAtt = '';
}
