import type { TreeNodeProps } from "@/components/TreeNode";
import { idIncrement } from "../utils/id-increment";

export const treeData: TreeNodeProps["node"][] = [
  {
    id: idIncrement(),
    name: "Documentation Orientation",
    fileType: "general-overview",
    type: "file",
  },
  {
    id: idIncrement(),
    name: "Artists",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Hail",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            artistName: "Hail",
            fileType: "artist-overview",
            type: "file",
          },
          {
            id: idIncrement(),
            name: "Media",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "Releases",
                type: "folder",
                children: [
                  {
                    id: idIncrement(),
                    name: "Unnamed LP (WIP)",
                    artistName: "Hail",
                    fileType: "artist-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "Transgression (2024)",
                    artistName: "Hail",
                    fileType: "artist-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "We Are Nothing (2023)",
                    artistName: "Hail",
                    fileType: "artist-album",
                    type: "file",
                  },
                ],
              },
              {
                id: idIncrement(),
                name: "Images",
                artistName: "Hail",
                fileType: "gallery-view",
                type: "file",
              },
              {
                id: idIncrement(),
                name: "Motions",
                type: "folder",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Old Town Diamonds",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "artist-overview",
            artistName: "Old Town Diamonds",
            type: "file",
          },
          {
            id: idIncrement(),
            name: "Media",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "Releases",
                type: "folder",
                children: [
                  {
                    id: idIncrement(),
                    name: "40 Miles (2024)",
                    fileType: "artist-album",
                    artistName: "Old Town Diamonds",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "A Pale Horse (2023)",
                    fileType: "artist-album",
                    artistName: "Old Town Diamonds",
                    type: "file",
                  },
                ],
              },
              {
                id: idIncrement(),
                name: "Images",
                type: "folder",
                children: [],
              },
              {
                id: idIncrement(),
                name: "Motions",
                type: "folder",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Hollow Senses",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "artist-overview",
            artistName: "Hollow Senses",
            type: "file",
          },
          {
            id: idIncrement(),
            name: "Media",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "Releases",
                type: "folder",
                children: [
                  {
                    id: idIncrement(),
                    name: "Taurobolium (2023)",
                    artistName: "Hollow Senses",
                    fileType: "artist-album",
                    type: "file",
                  },
                ],
              },
              {
                id: idIncrement(),
                name: "Images",
                type: "folder",
                children: [],
              },
              {
                id: idIncrement(),
                name: "Motions",
                type: "folder",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Fliege",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            artistName: "Fliege",
            fileType: "artist-overview",
            type: "file",
          },
          {
            id: idIncrement(),
            name: "Media",
            type: "folder",
            children: [
              {
                id: idIncrement(),
                name: "Output",
                type: "folder",
                children: [
                  {
                    id: idIncrement(),
                    name: "The Invisible Seam (2020)",
                    artistName: "Fliege",
                    fileType: "artist-album",
                    type: "file",
                  },
                ],
              },
              {
                id: idIncrement(),
                name: "Images",
                type: "folder",
                children: [],
              },
              {
                id: idIncrement(),
                name: "Motions",
                type: "folder",
                children: [],
              },
            ],
          },
        ],
      },
      // {
      //   id: idIncrement(),
      //   name: "L'Acephale",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "L'Acephale",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed LP (WIP)",
      //               artistName: "L'Acephale",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed EP (WIP)",
      //               artistName: "L'Acephale",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: idIncrement(),
      //   name: "The Mistons",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "The Mistons",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed LP (WIP)",
      //               artistName: "The Mistons",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: idIncrement(),
      //   name: "Entrain",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "Entrain",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed LP (WIP)",
      //               artistName: "Entrain",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: idIncrement(),
      //   name: "Refrigerated Nurses",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "Refrigerated Nurses",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed LP (WIP)",
      //               artistName: "Refrigerated Nurses",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: idIncrement(),
      //   name: "Notnauts",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "Notnauts",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Unnamed LP (WIP)",
      //               artistName: "Notnauts",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: idIncrement(),
      //   name: "The Hellcows",
      //   type: "folder",
      //   children: [
      //     {
      //       id: idIncrement(),
      //       name: "Overview",
      //       artistName: "The Hellcows",
      //       fileType: "artist-overview",
      //       type: "file",
      //     },
      //     {
      //       id: idIncrement(),
      //       name: "Media",
      //       type: "folder",
      //       children: [
      //         {
      //           id: idIncrement(),
      //           name: "Output",
      //           type: "folder",
      //           children: [
      //             {
      //               id: idIncrement(),
      //               name: "Singles (WIP)",
      //               artistName: "The Hellcows",
      //               fileType: "artist-album",
      //               type: "file",
      //             },
      //           ],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Images",
      //           type: "folder",
      //           children: [],
      //         },
      //         {
      //           id: idIncrement(),
      //           name: "Motions",
      //           type: "folder",
      //           children: [],
      //         },
      //       ],
      //     },
      //   ],
      // },

      // {
      //   id: idIncrement(),
      //   name: "Ebisu",
      //   type: "folder",
      //   children: [],
      // },
      // {
      //   id: idIncrement(),
      //   name: "Twin Perish",
      //   type: "folder",
      //   children: [],
      // },
    ],
  },
  // {
  //   id: idIncrement(),
  //   name: "Experiments",
  //   type: "folder",
  //   children: [],
  // },
  {
    id: idIncrement(),
    name: "Pre-Winterbeast",
    type: "folder",
    children: [
      {
        id: idIncrement(),
        name: "Transition 2014-2018",
        eraId: "2014-2018",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            type: "file",
            fileType: "pre-winterbeast-overview",
            eraId: "2014-2018",
          },
        ],
      },
      {
        id: idIncrement(),
        name: "Hellhole 2011-2014",
        eraId: "2011-2014",
        type: "folder",
        children: [
          // {
          //   id: idIncrement(),
          //   name: "Hail",
          //   type: "folder",
          //   children: [
          //     {
          //       id: idIncrement(),
          //       name: "Overview",
          //       artistName: "Hail",
          //       fileType: "artist-overview",
          //       type: "file",
          //     },
          //     {
          //       id: idIncrement(),
          //       name: "Media",
          //       type: "folder",
          //       children: [
          //         {
          //           id: idIncrement(),
          //           name: "Releases",
          //           type: "folder",
          //           children: [
          //             {
          //               id: idIncrement(),
          //               name: "Unnamed LP (WIP)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //             {
          //               id: idIncrement(),
          //               name: "Transgression (2024)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //             {
          //               id: idIncrement(),
          //               name: "We Are Nothing (2023)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //           ],
          //         },
          //         {
          //           id: idIncrement(),
          //           name: "Images",
          //           artistName: "Hail",
          //           fileType: "gallery-view",
          //           type: "file",
          //         },
          //         {
          //           id: idIncrement(),
          //           name: "Motions",
          //           type: "folder",
          //           children: [],
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
      {
        id: idIncrement(),
        name: "Freelance 2006-2011",
        eraId: "2006-2011",
        type: "folder",
        children: [
          // {
          //   id: idIncrement(),
          //   name: "Hail",
          //   type: "folder",
          //   children: [
          //     {
          //       id: idIncrement(),
          //       name: "Overview",
          //       artistName: "Hail",
          //       fileType: "artist-overview",
          //       type: "file",
          //     },
          //     {
          //       id: idIncrement(),
          //       name: "Media",
          //       type: "folder",
          //       children: [
          //         {
          //           id: idIncrement(),
          //           name: "Releases",
          //           type: "folder",
          //           children: [
          //             {
          //               id: idIncrement(),
          //               name: "Unnamed LP (WIP)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //             {
          //               id: idIncrement(),
          //               name: "Transgression (2024)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //             {
          //               id: idIncrement(),
          //               name: "We Are Nothing (2023)",
          //               artistName: "Hail",
          //               fileType: "artist-album",
          //               type: "file",
          //             },
          //           ],
          //         },
          //         {
          //           id: idIncrement(),
          //           name: "Images",
          //           artistName: "Hail",
          //           fileType: "gallery-view",
          //           type: "file",
          //         },
          //         {
          //           id: idIncrement(),
          //           name: "Motions",
          //           type: "folder",
          //           children: [],
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
    ],
  },
];
