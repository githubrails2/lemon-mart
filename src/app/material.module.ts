import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const modules = [MatToolbarModule, MatIconModule, MatButtonModule]
@NgModule({
  declarations: [],
  imports: [],
  exports: [...modules],
})
export class MaterialModule {}
