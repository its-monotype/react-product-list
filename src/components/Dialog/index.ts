import {
  Dialog as InternalDialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

type DialogType = typeof InternalDialog & {
  Trigger: typeof DialogTrigger;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Content: typeof DialogContent;
  Close: typeof DialogClose;
};

const Dialog = InternalDialog as DialogType;

Dialog.Trigger = DialogTrigger;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
Dialog.Close = DialogClose;

export type { DialogContentProps } from './Dialog';
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
};
