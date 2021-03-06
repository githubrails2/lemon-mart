import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CategoriesComponent } from './categories/categories.component'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { InventoryComponent } from './inventory.component'
import { ProductListComponent } from './product-list/product-list.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
      { path: 'home', component: InventoryHomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'stock-entry', component: StockEntryComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
