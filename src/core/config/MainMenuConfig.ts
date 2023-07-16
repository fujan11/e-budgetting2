const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        // svgIcon: "media/icons/duotune/art/art002.svg",
        // fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "Data Master",
    route: "/master",
    pages: [
      {
        sectionTitle: "Renstra",
        route: "/renstra",
        // svgIcon: "media/icons/duotune/general/gen022.svg",

        sub: [
          {
            heading: "Data Renstra",
            route: "/dataRenstra",
           
          },
          {
            heading: "Bidang Renstra",
            route: "/bidangRenstra",
           
          },
          {
            heading: "Tahun Renstra",
            route: "/TahunRenstra",
           
          },
        ],
      },
      {
        route: "/sebaranrenstra",
        // svgIcon: "media/icons/duotune/art/art009.svg",
        heading:"Sebaran Renstra",
      },
      {
        sectionTitle: "RKAT",
        route: "/rkat",
        // svgIcon: "media/icons/duotune/art/art009.svg",

        sub: [
          {
            heading: "Data RKAT",
            route: "/datarkat",
           
          },
        ],
      },
      {
        route: "/proker",
        // svgIcon: "media/icons/duotune/art/art009.svg",
        heading:"Program Kerja",
      },
      {
        route: "/pengajuandana",
        heading:"Pengajuan Dana",
      },
      {
        route: "/elpeje",
        heading:"LPJ",
      },
      {
        route: "/pagu",
        heading:"PAGU",
      },
    ],
  },
  
];

export default DocMenuConfig;
