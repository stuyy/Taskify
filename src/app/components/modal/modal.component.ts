import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvokeFunctionExpr } from '@angular/compiler';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-body">
      <p>Are you sure?</p>
      {{hello}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      <button type="button" class="btn btn-outline-danger" (click)="confirmDelete()">Confirm</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() deleteFlag;
  @Input() parent;
  constructor(public activeModal: NgbActiveModal) {}
  confirmDelete()
  {
    console.log("Confirming?");
    this.deleteFlag=true;
    this.parent.clear();
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent implements OnInit {
  private modalRef: NgbModal;
  private opened: any;
  private closed: any;
  @Output() delete = new EventEmitter();
  constructor(private modalService: NgbModal) {
    this.modalRef = modalService;
  }
  ngOnInit() {
    
  }
  open() {
    this.opened = this.modalService.open(NgbdModalContent)
    this.opened.componentInstance.deleteFlag=false;
    this.opened.componentInstance.parent = this;
  }
  closeModal()
  {
    this.opened.close();
  }
  clear()
  {
    this.delete.emit(true);
    this.opened.close();
  }
}
// https://stackoverflow.com/questions/44857626/how-to-access-properties-of-ngbdmodalcontent-from-another-component
