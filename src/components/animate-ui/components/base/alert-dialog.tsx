import * as React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';

type DialogDirection = 'top' | 'bottom' | 'left' | 'right';

interface AlertDialogContextValue {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const AlertDialogContext = React.createContext<AlertDialogContextValue | null>(null);

const useAlertDialogContext = () => {
    const context = React.useContext(AlertDialogContext);
    if (!context) {
        throw new Error('AlertDialog components must be used inside <AlertDialog>.');
    }
    return context;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ');

interface AlertDialogProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (value: boolean) => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
    children,
    open,
    defaultOpen = false,
    onOpenChange,
}) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : internalOpen;

    const setOpen = React.useCallback(
        (value: boolean) => {
            if (!isControlled) {
                setInternalOpen(value);
            }
            onOpenChange?.(value);
        },
        [isControlled, onOpenChange]
    );

    return (
        <AlertDialogContext.Provider value={{ open: currentOpen, setOpen }}>
            {children}
        </AlertDialogContext.Provider>
    );
};

interface AlertDialogTriggerProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children?: React.ReactNode;
    render?: React.ReactElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}

const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({
    children,
    render,
    onClick,
    ...props
}) => {
    const { setOpen } = useAlertDialogContext();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
            setOpen(true);
        }
    };

    if (render) {
        return React.cloneElement(render, {
            ...props,
            onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
                const renderOnClick = render.props.onClick;
                renderOnClick?.(event);
                handleClick(event);
            },
        });
    }

    return (
        <button type="button" {...props} onClick={handleClick}>
            {children}
        </button>
    );
};

export interface AlertDialogPopupProps {
    children: React.ReactNode;
    className?: string;
    from?: DialogDirection;
}

const getFromAnimation = (from: DialogDirection) => {
    switch (from) {
        case 'top':
            return { opacity: 0, y: -26, scale: 0.96 };
        case 'left':
            return { opacity: 0, x: -26, scale: 0.96 };
        case 'right':
            return { opacity: 0, x: 26, scale: 0.96 };
        case 'bottom':
        default:
            return { opacity: 0, y: 26, scale: 0.96 };
    }
};

const AlertDialogPopup: React.FC<AlertDialogPopupProps> = ({
    children,
    className,
    from = 'bottom',
}) => {
    const { open, setOpen } = useAlertDialogContext();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open, setOpen]);

    if (!mounted) {
        return null;
    }

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[120] flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    <motion.div
                        role="alertdialog"
                        aria-modal="true"
                        initial={getFromAnimation(from)}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={getFromAnimation(from)}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                            'relative w-full rounded-2xl border border-white/12 bg-[#0a1024]/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl',
                            className
                        )}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

interface BasePrimitiveProps {
    children: React.ReactNode;
    className?: string;
}

const AlertDialogHeader: React.FC<BasePrimitiveProps> = ({ children, className }) => (
    <div className={cn('mb-4 space-y-2 text-left', className)}>{children}</div>
);

const AlertDialogTitle: React.FC<BasePrimitiveProps> = ({ children, className }) => (
    <h3 className={cn('font-display text-xl font-bold text-cyan-100', className)}>{children}</h3>
);

const AlertDialogDescription: React.FC<BasePrimitiveProps> = ({ children, className }) => (
    <p className={cn('text-sm leading-relaxed text-slate-300', className)}>{children}</p>
);

const AlertDialogFooter: React.FC<BasePrimitiveProps> = ({ children, className }) => (
    <div className={cn('mt-5 flex items-center justify-end gap-3', className)}>{children}</div>
);

interface AlertDialogButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children: React.ReactNode;
}

const AlertDialogCancel: React.FC<AlertDialogButtonProps> = ({
    children,
    className,
    onClick,
    ...props
}) => {
    const { setOpen } = useAlertDialogContext();

    return (
        <button
            type="button"
            className={cn(
                'rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10',
                className
            )}
            onClick={(event) => {
                onClick?.(event);
                if (!event.defaultPrevented) {
                    setOpen(false);
                }
            }}
            {...props}
        >
            {children}
        </button>
    );
};

const AlertDialogAction: React.FC<AlertDialogButtonProps> = ({
    children,
    className,
    onClick,
    ...props
}) => {
    const { setOpen } = useAlertDialogContext();

    return (
        <button
            type="button"
            className={cn(
                'rounded-xl border border-cyan-300/40 bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/25 disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            onClick={(event) => {
                onClick?.(event);
                if (!event.defaultPrevented) {
                    setOpen(false);
                }
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogPopup,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
};
