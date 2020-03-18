import { FC } from 'react';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import { SnackbarContentProps } from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
declare const variantIcon: {
    success: typeof CheckCircleIcon;
    warning: typeof CheckCircleIcon;
    error: typeof CheckCircleIcon;
    info: typeof CheckCircleIcon;
};
export interface DefaultProps extends Pick<SnackbarProps, 'anchorOrigin' | 'autoHideDuration' | 'resumeHideDuration' | 'TransitionComponent' | 'transitionDuration' | 'TransitionProps'> {
}
export declare const ToastInit: (initProps: DefaultProps) => void;
export interface ToastProps extends SnackbarProps {
    className?: string;
    message?: string;
    onClose?: () => void;
    variant?: keyof typeof variantIcon;
}
export interface ToastContentProps extends SnackbarContentProps {
    className?: string;
    onClose?: () => void;
    message?: string;
    variantClassName?: keyof typeof variantIcon;
}
export declare const ToastMessageContent: FC<ToastContentProps>;
export declare const ToastMessage: FC<ToastProps>;
export {};
