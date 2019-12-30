import { FC } from 'react';
import { SnackbarProps } from '@material-ui/core/Snackbar';
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
export declare const ToastMessageContent: FC<ToastProps>;
export declare const ToastMessage: FC<ToastProps>;
export {};
