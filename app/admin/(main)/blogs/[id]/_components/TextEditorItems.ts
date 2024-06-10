import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  List,
  ListOrdered,
  LucideIcon,
  UnderlineIcon,
} from "lucide-react";

export const textEditorListMenu: {
  name: string;
  icon: LucideIcon;
  level?: number;
  textAlign?: string;
}[] = [
  {
    name: "bold",
    icon: Bold,
  },
  {
    name: "italic",
    icon: Italic,
  },
  {
    name: "heading",
    level: 1,
    icon: Heading1,
  },
  {
    name: "heading",
    level: 2,
    icon: Heading2,
  },
  {
    name: "heading",
    level: 3,
    icon: Heading3,
  },
  {
    name: "heading",
    level: 4,
    icon: Heading4,
  },

  {
    name: "bulletList",
    icon: List,
  },
  {
    name: "orderedList",
    icon: ListOrdered,
  },
  {
    name: "underline",
    icon: UnderlineIcon,
  },
  {
    name: "left",
    icon: AlignLeft,
    textAlign: "left",
  },
  {
    name: "center",
    icon: AlignCenter,
    textAlign: "center",
  },
  {
    name: "right",
    icon: AlignRight,
    textAlign: "right",
  },
];
