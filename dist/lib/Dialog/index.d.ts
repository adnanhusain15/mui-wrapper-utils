import React, { FC } from 'react';
import { DialogProps as parentDialogProps } from '@material-ui/core/Dialog/Dialog';
import { DialogContentProps } from '@material-ui/core/DialogContent';
interface DialogProps extends parentDialogProps {
    handleClose: Function;
    title: string;
    contentProps?: DialogContentProps;
    isActionCloseButton?: boolean;
    closeButtonText?: string;
    actionsChildren?: React.ReactNode;
}
export interface DialogTitleProps {
    children: React.ReactNode;
    onClose: () => void;
}
export declare const DialogTitle: FC<DialogTitleProps>;
export interface DialogActionProps {
    isCloseButton?: boolean;
    closeButtonText?: string;
    actionsChildren?: React.ReactNode;
    onClose?: Function;
}
export declare const AppDialog: FC<DialogProps>;
export default AppDialog;
