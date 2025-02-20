import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CorporateHousing from '../views/CorporateHousing.vue';
import TradeAccommodation from '../views/TradeAccommodation.vue';
import TemporaryAccommodation from '../views/TemporaryAccommodation.vue';
import GuaranteedRentInHerts from '../views/GuaranteedRentInHerts.vue';
import PartnershipsAndJoinVentures from '../views/PartnershipsAndJoinVentures.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/corporate-housing',
    name: 'CorporateHousing',
    component: CorporateHousing,
  },
  {
    path: '/trade-accommodation',
    name: 'TradeAccommodation',
    component: TradeAccommodation,
  },
  {
    path: '/temporary-accommodation',
    name: 'TemporaryAccommodation',
    component: TemporaryAccommodation,
  },
  {
    path: '/guaranteed-rent',
    name: 'GuaranteedRentInHerts',
    component: GuaranteedRentInHerts,
  },
  {
    path: '/partnerships-and-joint-ventures',
    name: 'PartnershipsAndJoinVentures',
    component: PartnershipsAndJoinVentures,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;