import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void { }

  stats = [
    { icon: 'inventory_2', label: 'Total Products', value: 120 },
    { icon: 'shopping_cart', label: 'Orders', value: 87 },
    { icon: 'warning', label: 'Low Stock', value: 6 },
    { icon: 'attach_money', label: 'Revenue', value: '₹45,000' }
  ];

  
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
