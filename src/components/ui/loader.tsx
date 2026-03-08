import { cn } from "@/lib/utils";

interface LoaderProps {
    className?: string;
}

export const LoaderOne = ({ className }: LoaderProps) => {
    return (
        <div className={cn("flex items-center justify-center gap-1.5", className)}>
            <span
                className="size-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "0ms", animationDuration: "0.8s" }}
            />
            <span
                className="size-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "150ms", animationDuration: "0.8s" }}
            />
            <span
                className="size-2 rounded-full bg-current animate-bounce"
                style={{ animationDelay: "300ms", animationDuration: "0.8s" }}
            />
        </div>
    );
};
