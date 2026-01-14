import type { TreeNodeProps } from "@/components/TreeNode";
import { idIncrement } from "../utils/id-increment";

export const treeData: TreeNodeProps["node"][] = [
  {
    id: idIncrement(),
    name: "Documentation Orientation",
    fileType: "wb-album",
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
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "Transgression (2024)",
                    fileType: "wb-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "We Are Nothing (2023)",
                    fileType: "wb-album",
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
        name: "Old Town Diamonds",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "40 Miles (2024)",
                    fileType: "wb-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "A Pale Horse (2023)",
                    fileType: "wb-album",
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
            fileType: "wb-album",
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
                    name: "Taurobolium (2023)",
                    fileType: "wb-album",
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
            fileType: "wb-album",
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
                    fileType: "wb-album",
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
        name: "L'Acephale",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
                    type: "file",
                  },
                  {
                    id: idIncrement(),
                    name: "Unnamed EP (WIP)",
                    fileType: "wb-album",
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
        name: "Mistons",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
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
        name: "Entrain",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
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
        name: "Refridgerated Nurses",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
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
        name: "Notnauts",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Unnamed LP (WIP)",
                    fileType: "wb-album",
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
        name: "Hellcows",
        type: "folder",
        children: [
          {
            id: idIncrement(),
            name: "Overview",
            fileType: "wb-album",
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
                    name: "Singles (WIP)",
                    fileType: "wb-album",
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
  {
    id: idIncrement(),
    name: "Experiments",
    type: "folder",
    children: [],
  },
];
