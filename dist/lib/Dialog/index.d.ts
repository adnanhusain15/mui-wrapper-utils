import React, { FC } from 'react';
import { DialogProps as parentDialogProps } from '@material-ui/core/Dialog/Dialog';
import { DialogContentProps } from '@material-ui/core/DialogContent';
export interface DialogTitleProps {
    children: React.ReactNode;
    onClose: () => void;
    headerContent?: React.ReactNode;
    headerClasses?: Array<string> | string;
    closeButtonClasses?: Array<string> | string;
    isCloseButton?: boolean;
}
export interface DialogProps extends parentDialogProps {
    handleClose: Function;
    headerProps?: Pick<DialogTitleProps, 'headerContent' | 'headerClasses' | 'closeButtonClasses' | 'isCloseButton'>;
    contentProps?: DialogContentProps;
    isActionCloseButton?: boolean;
    closeButtonText?: string;
    actionsChildren?: React.ReactNode;
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
