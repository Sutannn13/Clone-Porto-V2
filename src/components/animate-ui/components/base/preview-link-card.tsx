import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end';
type FollowCursor = boolean | 'x' | 'y';

interface PreviewLinkCardContextValue {
    href: string;
    open: boolean;
    setOpen: (value: boolean) => void;
    followCursor: FollowCursor;
    cursor: { x: number; y: number };
}

const PreviewLinkCardContext = React.createContext<PreviewLinkCardContextValue | null>(null);

const usePreviewLinkCardContext = () => {
    const context = React.useContext(PreviewLinkCardContext);
    if (!context) {
        throw new Error('PreviewLinkCard components must be used inside <PreviewLinkCard>.');
    }
    return context;
};

const cn = (...classes: Array<string | undefined | null | false>) =>
    classes.filter(Boolean).join(' ');

interface PreviewLinkCardProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    followCursor?: FollowCursor;
}

const PreviewLinkCard: React.FC<PreviewLinkCardProps> = ({
    href,
    children,
    className,
    followCursor = false,
}) => {
    const [open, setOpen] = React.useState(false);
    const [cursor, setCursor] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursor({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <PreviewLinkCardContext.Provider
            value={{ href, open, setOpen, followCursor, cursor }}
        >
            <span
                className={cn('relative inline-flex', className)}
                onMouseLeave={() => setOpen(false)}
                onMouseMove={handleMouseMove}
            >
                {children}
            </span>
        </PreviewLinkCardContext.Provider>
    );
};

interface PreviewLinkCardTriggerProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

const PreviewLinkCardTrigger: React.FC<PreviewLinkCardTriggerProps> = ({
    children,
    onMouseEnter,
    onFocus,
    onBlur,
    href,
    rel,
    ...props
}) => {
    const { href: contextHref, setOpen } = usePreviewLinkCardContext();

    return (
        <a
            href={href ?? contextHref}
            rel={rel ?? 'noreferrer'}
            onMouseEnter={(event) => {
                onMouseEnter?.(event);
                setOpen(true);
            }}
            onFocus={(event) => {
                onFocus?.(event);
                setOpen(true);
            }}
            onBlur={(event) => {
                onBlur?.(event);
                setOpen(false);
            }}
            {...props}
        >
            {children}
        </a>
    );
};

export interface PreviewLinkCardPanelProps {
    children: React.ReactNode;
    side?: Side;
    sideOffset?: number;
    align?: Align;
    alignOffset?: number;
    target?: string;
    className?: string;
}

const getPlacementClass = (side: Side, align: Align) => {
    if (side === 'bottom') {
        if (align === 'start') return 'left-0';
        if (align === 'end') return 'right-0';
        return 'left-1/2 -translate-x-1/2';
    }

    if (side === 'top') {
        if (align === 'start') return 'left-0';
        if (align === 'end') return 'right-0';
        return 'left-1/2 -translate-x-1/2';
    }

    if (side === 'left') {
        if (align === 'start') return 'top-0';
        if (align === 'end') return 'bottom-0';
        return 'top-1/2 -translate-y-1/2';
    }

    if (align === 'start') return 'top-0';
    if (align === 'end') return 'bottom-0';
    return 'top-1/2 -translate-y-1/2';
};

const getSideStyle = (
    side: Side,
    sideOffset: number,
    alignOffset: number,
    followCursor: FollowCursor,
    cursor: { x: number; y: number }
): React.CSSProperties => {
    const style: React.CSSProperties = {};

    if (followCursor === true || followCursor === 'x') {
        style.left = cursor.x + 12;
    }

    if (followCursor === true || followCursor === 'y') {
        style.top = cursor.y + 12;
    }

    if (side === 'bottom') {
        if (style.top === undefined) style.top = `calc(100% + ${sideOffset}px)`;
        if (alignOffset !== 0 && style.left === undefined) style.marginLeft = alignOffset;
    }

    if (side === 'top') {
        style.bottom = `calc(100% + ${sideOffset}px)`;
        if (alignOffset !== 0 && style.left === undefined) style.marginLeft = alignOffset;
    }

    if (side === 'left') {
        style.right = `calc(100% + ${sideOffset}px)`;
        if (alignOffset !== 0 && style.top === undefined) style.marginTop = alignOffset;
    }

    if (side === 'right') {
        if (style.left === undefined) style.left = `calc(100% + ${sideOffset}px)`;
        if (alignOffset !== 0 && style.top === undefined) style.marginTop = alignOffset;
    }

    return style;
};

const PreviewLinkCardPanel: React.FC<PreviewLinkCardPanelProps> = ({
    children,
    side = 'top',
    sideOffset = 8,
    align = 'center',
    alignOffset = 0,
    className,
    target,
}) => {
    const { href, open, followCursor, cursor } = usePreviewLinkCardContext();

    const sideTransform =
        side === 'top'
            ? { y: 10 }
            : side === 'bottom'
              ? { y: -10 }
              : side === 'left'
                ? { x: 10 }
                : { x: -10 };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, ...sideTransform }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, ...sideTransform }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                        'pointer-events-none absolute z-[80] overflow-hidden rounded-xl border border-cyan-200/20 bg-[#070f24]/95 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl',
                        getPlacementClass(side, align),
                        className
                    )}
                    style={getSideStyle(side, sideOffset, alignOffset, followCursor, cursor)}
                >
                    <a href={href} target={target} rel="noreferrer" className="block">
                        {children}
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

interface PreviewLinkCardImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    alt: string;
}

const PreviewLinkCardImage: React.FC<PreviewLinkCardImageProps> = ({
    alt,
    src,
    className,
    ...props
}) => {
    const { href } = usePreviewLinkCardContext();
    const [imageFailed, setImageFailed] = React.useState(false);

    const previewSrc =
        src ?? `https://image.thum.io/get/width/900/noanimate/${encodeURIComponent(href)}`;

    if (imageFailed) {
        return (
            <div className="flex h-40 w-[280px] items-center justify-center rounded-lg border border-cyan-200/20 bg-gradient-to-br from-[#0a1a3f] via-[#091a2f] to-[#0a2635] p-4 text-center text-xs text-slate-200">
                <span className="line-clamp-3 break-words">{href}</span>
            </div>
        );
    }

    return (
        <img
            src={previewSrc}
            alt={alt}
            onError={() => setImageFailed(true)}
            className={cn(
                'h-40 w-[280px] rounded-lg object-cover object-top',
                className
            )}
            loading="lazy"
            {...props}
        />
    );
};

export {
    PreviewLinkCard,
    PreviewLinkCardTrigger,
    PreviewLinkCardPanel,
    PreviewLinkCardImage,
};
