import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        {type: 'doc', id: 'projects/overview'},
        {type: 'doc', id: 'projects/api-reference-overhaul'},
        {type: 'doc', id: 'projects/release-notes-system'},
      ],
    },
    {
      type: 'category',
      label: 'Playbooks',
      collapsed: true,
      items: [
        {type: 'doc', id: 'playbooks/api-docs-criteria'},
        {type: 'doc', id: 'playbooks/release-notes-playbook'},
        {type: 'doc', id: 'playbooks/styles-and-standards'},
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        {type: 'doc', id: 'api/overview'},
        {type: 'doc', id: 'api/v1'},
        {type: 'doc', id: 'api/v2'},
      ],
    },
  ],
};

export default sidebars;
