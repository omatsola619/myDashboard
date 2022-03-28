import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Employees',
    path: '/',
    icon: <IoIcons.IoMdList />,
    cName: 'nav-text'
  },
  {
    title: 'Add Employee',
    path: '/add',
    icon: <IoIcons.IoIosAddCircleOutline />,
    cName: 'nav-text'
  },
];
