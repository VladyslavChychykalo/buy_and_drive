import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [ContactsComponent],
})
export class SharedModule {}
