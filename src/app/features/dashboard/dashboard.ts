import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card';
import { CustomButtonComponent } from '../../shared/ui/custom-button/custom-button';
import { AlertComponent } from '../../shared/ui/alert/alert';


type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  favorite?: boolean;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf, CardComponent, CustomButtonComponent, AlertComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  alert = { show: false, type: 'info' as 'info'|'success'|'warning'|'error', message: '' };

  products: Product[] = [
    { id: 1, name: 'Lomo Saltado', price: 15.00, imageUrl: 'https://picsum.photos/seed/lomo/600/400' },
    { id: 2, name: 'Ceviche Clásico', price: 18.00, imageUrl: 'https://picsum.photos/seed/ceviche/600/400' },
    { id: 3, name: 'Ají de Gallina', price: 14.00, imageUrl: 'https://picsum.photos/seed/aji/600/400' },
  ];

  showAlert(type: 'info'|'success'|'warning'|'error', message: string) {
    this.alert = { show: true, type, message };
  }

  closeAlert() {
    this.alert.show = false;
  }

  toggleFavorite(p: Product) {
    p.favorite = !p.favorite;
    this.showAlert('success', `${p.name} ${p.favorite ? 'añadido a favoritos' : 'quitado de favoritos'}.`);
  }

  removeProduct(p: Product) {
    this.products = this.products.filter(x => x.id !== p.id);
    this.showAlert('warning', `${p.name} eliminado del listado.`);
  }

  buy(p: Product) {
    this.showAlert('info', `Compra simulada: ${p.name} (S/ ${p.price.toFixed(2)})`);
  }

  addMock() {
    const id = Math.max(0, ...this.products.map(x => x.id)) + 1;
    this.products = [
      ...this.products,
      { id, name: `Nuevo Producto ${id}`, price: 10 + id, imageUrl: `https://picsum.photos/seed/${id}/600/400` }
    ];
    this.showAlert('success', 'Producto agregado correctamente.');
  }
}
