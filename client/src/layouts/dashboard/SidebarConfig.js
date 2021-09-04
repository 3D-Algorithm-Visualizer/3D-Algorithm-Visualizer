import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Pathfinding Algorithms',
    path: '/dashboard/3dtool',
    icon: getIcon('bi:badge-3d')
  },
  {
    title: 'Sorting Algorithms',
    path: '/dashboard/sortingalgorithms',
    icon: getIcon('vaadin:chart-3d')
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('uit:blogger-alt')
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('ant-design:login-outlined')
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('ant-design:user-add-outlined')
  }
];

export default sidebarConfig;
