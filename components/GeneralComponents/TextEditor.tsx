"use client";
import Placeholder from "@tiptap/extension-placeholder";
import { useCurrentEditor, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import ListItems from "@tiptap/extension-list-item";
import LinkTipTap, { Link } from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { cn } from "@/lib/utils";
import { textEditorListMenu } from "../../app/admin/(main)/blogs/[id]/_components/TextEditorItems";
import { LinkIcon } from "lucide-react";
import { useCallback } from "react";

function EditorMenu() {
  const editor = useCurrentEditor();
  const handelClick = (obj: any) => {
    switch (obj.name as string) {
      case "italic":
        editor.editor?.chain().focus().toggleItalic().run();
        break;
      case "bold":
        editor.editor?.chain().focus().toggleBold().run();
        break;
      case "heading":
        editor.editor
          ?.chain()
          .focus()
          .toggleHeading({ level: obj.level })
          .run();
        break;
      case "underline":
        editor.editor?.chain().focus().toggleUnderline().run();
        break;
      case "bulletList":
        editor.editor?.chain().focus().toggleBulletList().run();
        break;
      case "orderedList":
        editor.editor?.chain().focus().toggleOrderedList().run();
        break;
      case "left":
        editor.editor?.chain().focus().setTextAlign(obj.textAlign).run();
        break;
      case "center":
        editor.editor?.chain().focus().setTextAlign(obj.textAlign).run();
        break;
      case "right":
        editor.editor?.chain().focus().setTextAlign(obj.textAlign).run();
        break;
    }
  };
  const setLink = useCallback(() => {
    const previousUrl = editor.editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);
  return (
    <div className="mb-3 flex flex-row flex-wrap gap-2">
      {textEditorListMenu.map((e, idx) => (
        <Button
          size={"icon"}
          type="button"
          onClick={() => handelClick(e)}
          className={cn({
            "aspect-square border bg-white text-black hover:bg-gray-100":
              e.textAlign == null
                ? editor.editor?.isActive(e.name, {
                    level: e.level,
                  })
                : editor.editor?.isActive({
                    textAlign: e.textAlign,
                  }),
          })}
          key={idx}
        >
          {<e.icon className="w-4" />}
        </Button>
      ))}
      <Button
        size={"icon"}
        type="button"
        onClick={() => {
          if (editor.editor?.isActive("link")) {
            editor.editor?.chain().focus().unsetLink().run();
          } else {
            setLink();
          }
        }}
        className={cn({
          "aspect-square border bg-white text-black hover:bg-gray-100":
            editor.editor?.isActive("link"),
        })}
      >
        {<LinkIcon className="w-4" />}
      </Button>
    </div>
  );
}

export default function TextEditor({
  onDataUpdate,
  content,
}: {
  onDataUpdate: (data: string) => void;
  content: string;
}) {
  return (
    <div className="mb-11 mt-5 w-full rounded-lg border px-4 py-4">
      <EditorProvider
        slotBefore={
          <>
            <EditorMenu />
            <hr />
          </>
        }
        onUpdate={({ editor }) => {
          onDataUpdate(editor.getHTML());
        }}
        extensions={[
          StarterKit,
          Placeholder.configure({
            placeholder: "Write something ...",
          }),
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
          Link.configure({
            openOnClick: false,
            autolink: true,
          }),
          Underline,
          LinkTipTap,
          ListItems,
          Paragraph,
          Heading,
        ]}
        content={content}
        editorProps={{
          attributes: {
            class:
              "prose px-6 max-w-full  dark:prose-invert w-full   focus:outline-none leading-6",
          },
        }}
      />
    </div>
  );
}
